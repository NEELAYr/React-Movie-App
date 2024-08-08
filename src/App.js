import MovieList from "./MovieList";
import Navbar from "./Navbar";
import React from "react";
import { movies } from "./moviesData";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        movies : movies,
        cartCount: 0
    } 
  }

  incRating = (movie) => {
      const {movies} = this.state
      const mid = movies.indexOf(movie)
      if (movies[mid].star < 5) {
          movies[mid].star += 0.5
      }
      this.setState({
        movies: movies
      })
  }

  decRating = (movie) => {
      const {movies} = this.state
      const mid = movies.indexOf(movie)
      if (movies[mid].star > 0) {
          movies[mid].star -= 0.5
      }
      this.setState({
        movies: movies
      })
  }

  handleFav = (movie) => {
      const {movies} = this.state
      const mid = movies.indexOf(movie)
      movies[mid].fav = !movies[mid].fav 
      this.setState(
          {
              movies: movies
          }
      )
  }

  handleCart = (movie) => {
      let {movies, cartCount} = this.state
      const mid = movies.indexOf(movie)
      movies[mid].isInCart = !movies[mid].isInCart 
      if (movies[mid].isInCart) {
        cartCount += 1
      } else {
        cartCount -= 1
      }

      this.setState(
          {
              movies: movies,
              cartCount: cartCount
          }
      )
  }

  render() {
    const {movies, cartCount} = this.state;
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList movies={movies}
                   incRating={this.incRating} 
                   decRating={this.decRating} 
                   handleFav={this.handleFav} 
                   handleCart={this.handleCart}/>
      </>
    );
  }
}

export default App;
