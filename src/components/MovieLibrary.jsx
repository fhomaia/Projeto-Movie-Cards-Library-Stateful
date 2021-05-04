// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.moviesByGender = this.moviesByGender.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onSearchTextChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;
    this.setState({
      [name]: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  moviesMarked(movies, bookmarkedOnly) {
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    return movies;
  }

  moviesByGender(movies, bookmarkedOnly, selectedGenre) {
    if (selectedGenre === '') {
      return this.moviesMarked(movies, bookmarkedOnly);
    }
    return this.moviesMarked(movies, bookmarkedOnly)
    .filter((movie) => movie.genre === selectedGenre);
  }

  filteredMovies(movies, bookmarkedOnly, selectedGenre, searchText) {
    const filteredMovies = this.moviesByGender(movies, bookmarkedOnly, selectedGenre)
      .filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)));
    if (filteredMovies.length > 0) return filteredMovies;
    return this.moviesByGender(movies, bookmarkedOnly, selectedGenre);
  }

  addNewMovie(newmovie) {
    this.setState((oldstate) => ({
      movies: [...oldstate.movies, newmovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ 
            this.filteredMovies(movies, bookmarkedOnly, selectedGenre, searchText) }
        />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
