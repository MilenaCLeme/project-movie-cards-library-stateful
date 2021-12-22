import React from 'react';
import PropTypes from 'prop-types';

class InputTexto extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div className="mb-3">
        <label htmlFor="text" className="form-label">
          Inclui o texto:
          <input
            id="text"
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

InputTexto.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default InputTexto;
