function MovieCard(props){
    const {movies, incRating, decRating, handleFav, handleCart} = props;
    const {title, plot, price, rating, star, fav, isInCart, poster} = props.movies;
    return (
        <div className='main'>
            <div className='movie-card'>
                <div className='left'>
                    <img alt='Poster' src={poster}/>
                </div>
                <div className='right'>
                    <div className='title'>{title}</div>
                    <div className='plot'>{plot}</div>
                    <div className='price'>$ {price}</div>
                    <div className='footer'>
                        <div className='rating'>{rating}</div>
                        <div className='star-dis'>
                        <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={() => decRating(movies)}
                        />
                        <img className="stars" 
                                alt="stars" 
                                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                        />
                        <img className="str-btn" 
                            alt="increase" 
                            src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                            onClick={() => incRating(movies)}
                        />
                        <span className="starCount">{star}</span>
                        </div>
                        {fav? <button onClick={() => handleFav(movies)} className='unfavourite-btn'>Un-Favourite</button>:
                        <button onClick={() => handleFav(movies)} className='favourite-btn'>Favourite</button>}
            
                        {isInCart? <button onClick={() => handleCart(movies)} className='remove-cart-btn'>Remove from Cart</button> : 
                        <button onClick={() => handleCart(movies)} className='cart-btn'>Add to Cart</button>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard