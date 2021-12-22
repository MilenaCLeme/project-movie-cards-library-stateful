import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Imagem from './Imagem';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import Genero from './Genero';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetOnclink = this.resetOnclink.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = name === 'rating' ? Number(target.value) : target.value;
    this.setState({
      [name]: value,
    });
  }

  resetOnclink() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form id="form-add-movie">
        <div>
          <Titulo
            title={ title }
            handleChange={ this.handleChange }
          />
          <Subtitulo
            subtitle={ subtitle }
            handleChange={ this.handleChange }
          />
          <Imagem
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />
        </div>
        <div className="flex-colun">
          <Avaliacao
            rating={ rating }
            handleChange={ this.handleChange }
          />
          <Genero
            genre={ genre }
            handleChange={ this.handleChange }
          />
          <Sinopse
            storyline={ storyline }
            handleChange={ this.handleChange }
          />
        </div>
        <button
          onClick={ this.resetOnclink }
          type="button"
          data-testid="send-button"
          className="btn btn-dark"
        >
          Salvar
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
