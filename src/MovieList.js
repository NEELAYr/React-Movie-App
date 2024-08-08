import MovieCard from './MovieCard'

function MovieList(props) {
  const {movies, incRating, decRating, handleFav, handleCart} = props;
  return (
      <>
      {movies.map((movie) => <MovieCard key={movie.id} 
                                        movies={movie} 
                                        incRating={incRating} 
                                        decRating={decRating} 
                                        handleFav={handleFav} 
                                        handleCart={handleCart}/>)}
      </>
  )
}

export default MovieList