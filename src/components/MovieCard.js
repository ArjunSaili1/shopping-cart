function MovieCard(props){
    return(
        <div>
            <img src={props.image}></img>
            <h3>{props.title}</h3>  
            <h4>{props.releaseDate}</h4>
            <h5>{props.rating}</h5>
        </div>
    )
}

export default MovieCard