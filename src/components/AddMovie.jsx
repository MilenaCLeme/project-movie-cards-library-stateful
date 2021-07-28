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
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Titulo
          value={ title }
          handleChange={ this.handleChange }
        />
        <Subtitulo
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <Imagem
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <Sinopse
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <Avaliacao
          value={ rating }
          handleChange={ this.handleChange }
        />
        <Genero
          value={ genre }
          handleChange={ this.handleChange }
        />
        <button onClick={ onClick } type="button" data-testid="send-button">
          Adicionar Filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
