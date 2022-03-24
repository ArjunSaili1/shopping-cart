function MovieCard(props){
    return(
        <div className="movie-card">
            <img src={props.image}></img>
            <h3>{props.title}</h3>  
            <h4>{props.releaseDate}</h4>
            <h5>{props.rating}/10</h5>
        </div>
    )
}

export default MovieCard