import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagem" className="form-label">
        Imagem
        <input
          type="text"
          id="imagem"
          onChange={ handleChange }
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          className="form-control"
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Imagem;
