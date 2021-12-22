import React from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
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
      moviesfiltro: props.movies,
      hide: false,
      addMovie: false,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.salvarMovies = this.salvarMovies.bind(this);
    this.onClickHide = this.onClickHide.bind(this);
    this.onClickAddMovie = this.onClickAddMovie.bind(this);
  }

  onSearchTextChange(event) {
    const { moviesfiltro } = this.state;
    const filterMovies = moviesfiltro.filter(({ title, subtitle, storyline }) => (
      title.includes(event.target.value)
      || subtitle.includes(event.target.value)
      || storyline.includes(event.target.value)));
    this.setState({
      searchText: event.target.value,
      movies: filterMovies,
    });
  }

  onBookmarkedChange(event) {
    const { movies, moviesfiltro } = this.state;
    if (event.target.checked === true) {
      const filterFavoritos = movies.filter(({ bookmarked }) => bookmarked === true);
      this.setState({
        bookmarkedOnly: event.target.checked,
        movies: filterFavoritos,
      });
    } else {
      const semFiltro = moviesfiltro;
      this.setState({
        bookmarkedOnly: event.target.checked,
        movies: semFiltro,
      });
    }
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

  onClickHide() {
    const { hide } = this.state;
    if (hide === false) {
      this.setState({
        hide: true,
      });
    } else {
      this.setState({
        hide: false,
      });
    }
  }

  onClickAddMovie() {
    const { addMovie } = this.state;
    if (addMovie === false) {
      this.setState({
        addMovie: true,
      });
    } else {
      this.setState({
        addMovie: false,
      });
    }
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
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
      hide,
      addMovie,
    } = this.state;

    const iconeLupa = <BiSearchAlt2 />;

    return (
      <div>
        <div className="sub-title-schear">
          <h2>My awesome movie library</h2>
          <button
            type="submit"
            onClick={ this.onClickHide }
            className="distancia btn btn-dark"
          >
            { iconeLupa }
          </button>
        </div>
        <div id="search-movie">
          {
            hide === false ? null : (
              <SearchBar
                searchText={ searchText }
                onSearchTextChange={ this.onSearchTextChange }
                bookmarkedOnly={ bookmarkedOnly }
                onBookmarkedChange={ this.onBookmarkedChange }
                selectedGenre={ selectedGenre }
                onSelectedGenreChange={ this.onSelectedGenreChange }
              />
            )
          }
        </div>
        <button type="button" onClick={ this.onClickAddMovie } className="bt-dispancia btn btn-outline-dark">Add Movie</button>
        {
          addMovie === false ? null : (
            <AddMovie onClick={ this.salvarMovies } />
          )
        }
        <MovieList movies={ movies } />
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
