import React from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitulo" className="form-label" id="label-subtitulo">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitulo"
          onChange={ handleChange }
          value={ subtitle }
          className="form-control"
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Subtitulo;
