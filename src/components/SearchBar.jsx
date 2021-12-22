import React from 'react';
import PropTypes from 'prop-types';
import InputTexto from './InputText';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form className="row gx-3 gy-2 align-items-center" id="form-search">
        <InputTexto
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <div className="mb-3">
          <label htmlFor="favoritos">
            Mostrar somente favoritos
            <input
              type="checkbox"
              id="favoritos"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              className="form-check-input"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">
            Filtrar por gênero
            <select
              id="genero"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              className="form-select"
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
