import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const {
      movies,
      searchText,
      onSelectedGenreChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSearchTextChange,
    } = this.props;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <div data-testid="movie-list" className="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default MovieList;
