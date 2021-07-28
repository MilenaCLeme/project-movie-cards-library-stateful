import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="textos" data-testid="storyline-input-label">
        Sinopse
        <input
          type="textarea"
          id="textos"
          name="storyline"
          onChange={ handleChange }
          data-testid="storyline-input"
          value={ storyline }
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
