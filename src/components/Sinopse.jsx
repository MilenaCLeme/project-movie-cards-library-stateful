import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="textos" className="form-label" id="label-storyline">
        Sinopse
        <textarea
          id="textos"
          name="storyline"
          onChange={ handleChange }
          data-testid="storyline-input"
          value={ storyline }
          className="form-control"
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Sinopse;
