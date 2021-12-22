import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="avaliacao" className="form-label" id="label-avaliacao">
        Avaliação
        <input
          id="avaliacao"
          type="number"
          name="rating"
          max={ 5 }
          min={ 0 }
          onChange={ handleChange }
          value={ rating }
          className="form-control"
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Avaliacao;
