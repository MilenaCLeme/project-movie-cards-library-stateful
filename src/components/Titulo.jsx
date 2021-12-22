import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label
        htmlFor="titulo"
        className="form-label"
        id="label-title"
      >
        Título
        <input
          type="text"
          name="title"
          id="titulo"
          value={ title }
          onChange={ handleChange }
          className="form-control"
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Titulo;
