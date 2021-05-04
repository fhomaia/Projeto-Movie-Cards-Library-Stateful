// implement AddMovie component here.
import React from 'react';

class AddMovie extends React.Component{
  constructor(){
    super();
    this.changeHandler = this.changeHandler.bind(this)
    this.addMovieEvent = this.addMovieEvent.bind(this)
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre:'action',
    }
  };

  changeHandler({target}){
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  };

  addMovieEvent(event) {
    event.preventDefault()
    this.props.onClick(this.state)
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre:'action',
    })
  };

  createform (title, type , alternative) {
    return <input 
    type={ type }
    name={ title }
    value={ this.state[title] }
    data-testid={ `${alternative}-input` }
    onChange={ this.changeHandler }
    />
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <div>
          <label data-testid="subtitle-input-label">Subtítulo</label>
          {this.createform('subtitle', 'text', 'subtitle')}
        </div>
        <div>
          <label data-testid="title-input-label">Título</label>
          {this.createform('title', 'text', 'title')}
        </div>
        <div>
          <label data-testid="image-input-label" >Imagem</label>
          {this.createform('imagePath', 'text' ,'image')}
        </div>
        <div>
          <label data-testid="storyline-input-label">Sinopse</label>
          <textarea 
          name="storyline"
          value={ this.state['storyline'] }
          data-testid={ `storyline-input` }
          onChange={ this.changeHandler }
          />
        </div>
        <div>
          <label data-testid="rating-input-label">Avaliação</label>
          {this.createform('rating', 'number', 'rating')}
        </div>
        <div>
          <label data-testid="genre-input-label">Gênero</label>
          <select
          data-testid="genre-input"
          name='genre'
          value={this.state.genre}
          onChange={this.changeHandler}>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </div>
        <button
        data-testid="send-button"
        onClick={(event) => this.addMovieEvent(event) }>Adicionar filme</button>
      </form>
    );
  };
};
export default AddMovie;
