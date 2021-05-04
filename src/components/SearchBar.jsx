// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render(){
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props
    return (
      <form data-testid="search-bar-form">
          <div>
          <label  data-testid="text-input-label" >Inclui o texto:</label>
          <input name="searchText" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input"/>
          </div>
          <div>
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input name="bookmarkedOnly" type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input"/>
          </div>
          <div>
          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select name="selectedGenre" value={ selectedGenre } onChange={ onSelectedGenreChange } data-testid="select-input">
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
          </div>
      </form>
    )
  }
}

export default SearchBar;