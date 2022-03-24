function MovieCard(props){
    return(
        <div className="movie-card">
            <div className="movie-details">
                <img className="movie-img" alt={props.title} src={props.image}></img>
                <h3>{props.title}</h3>  
                <h4>{props.releaseDate}</h4>
                <h5>{props.rating}/10</h5>
            </div>
            <div className="add-btn-container">
                <button className="add-btn">Add to Cart</button>
            </div>
        </div>
    )
}

export default MovieCard