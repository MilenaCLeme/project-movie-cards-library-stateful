import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    /* João Victor Turma 13 - me ajudou a esclarecer o contexto do props e também a state.movies funcionar */

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.salvarMovies = this.salvarMovies.bind(this);
  }

  onSearchTextChange(event) {
    const { movies } = this.state;
    const filterMovies = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(event.target.value)
      || subtitle.includes(event.target.value)
      || storyline.includes(event.target.value)));
    this.setState({
      searchText: event.target.value,
      movies: filterMovies,
    });
  }

  onBookmarkedChange(event) {
    const { movies } = this.state;
    const filterFavoritos = movies.filter(({ bookmarked }) => bookmarked === true);
    this.setState({
      bookmarkedOnly: event.target.checked,
      movies: filterFavoritos,
    });
  }

  onSelectedGenreChange(event) {
    const { props } = this;
    const { movies } = this.state;
    const filterGeneros = event.target.value === '' ? props.movies
      : movies.filter(({ genre }) => (genre === event.target.value));
    this.setState({
      selectedGenre: event.target.value,
      movies: filterGeneros,
    });
  }

  /* Ajuda do Requsito 19 - Lucas Caribé, José Luís, Jeferson Oliveira, Bruna Vottri, Genesis Henriques - Turma 13 */
  salvarMovies(objNewMovie) {
    const { movies } = this.state;
    const alterado = [...movies];
    alterado.push(objNewMovie);
    this.setState({
      movies: alterado,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(this);
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.salvarMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
