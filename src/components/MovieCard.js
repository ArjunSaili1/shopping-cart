function MovieCard(props){

    const giveCartMovieDetails = (e) =>{
        e.target.remove();
        const movieDetails = {
            title: props.title,
            image: props.image,
            price: price
        }
        props.addItem(movieDetails)
    }

    const price = props.releaseDate? "$".concat(props.releaseDate.substring(0,2)-0.01) : "Unavailable"

    return(
        <div className="movie-card">
            <div className="movie-details">
                <img className="movie-img" alt={props.title} src={props.image}></img>
                <h2>{props.title}</h2>  
                <h3>{price}</h3>
                <h4>{props.releaseDate}</h4>
                <h5>{props.rating}/10</h5>
            </div>
            <div className="add-btn-container">
                {props.releaseDate ? <button className="add-btn" onClick={giveCartMovieDetails}>Add to Cart</button>: null}
            </div>
        </div>
    )
}

export default MovieCard