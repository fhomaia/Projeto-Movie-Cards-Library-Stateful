// implement AddMovie component here.
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.addMovieEvent = this.addMovieEvent.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovieEvent(event) {
    const { onClick } = this.props;
    event.preventDefault();
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

  createform(title, type, alternative, name) {
    return (
      <div>
        <label
          data-testid={ `${alternative}-input-label` }
          htmlFor={ `${alternative}-input` }
        >
          { name }
          <input
            type={ type }
            name={ title }
            value={ this.state[title] }
            id={ `${alternative}-input` }
            data-testid={ `${alternative}-input` }
            onChange={ this.changeHandler }
          />
        </label>
      </div>);
  }

  render() {
    const { storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.createform('subtitle', 'text', 'subtitle', 'Subtítulo')}
        {this.createform('title', 'text', 'title', 'Título')}
        {this.createform('imagePath', 'text', 'image', 'Imagem')}
        <div>
          <label
            data-testid="storyline-input-label"
            htmlFor="storyline-input"
          >
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              id="storyline-input"
              data-testid="storyline-input"
              onChange={ this.changeHandler }
            />
          </label>
        </div>
        {this.createform('rating', 'number', 'rating', 'Avaliação')}
        <div>
          <label data-testid="genre-input-label" htmlFor="genre-input">
            Gênero
            <select
              id="genre-input"
              data-testid="genre-input"
              name="genre"
              value={ genre }
              onChange={ this.changeHandler }
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </div>
        <button
          type="button"
          data-testid="send-button"
          onClick={ (event) => this.addMovieEvent(event) }
        >
        Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
