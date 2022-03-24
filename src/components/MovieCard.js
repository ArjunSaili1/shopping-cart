import { useEffect, useState } from "react";

function MovieCard(props){

    const [price, setPrice] = useState(0);

    const generateRandomPrice = () =>{
        setPrice(Math.floor(Math.random() * (11) + 9) + 0.99)
    }

    useEffect(()=>{
        generateRandomPrice();
    }, [])

    return(
        <div className="movie-card">
            <div className="movie-details">
                <img className="movie-img" alt={props.title} src={props.image}></img>
                <h3>{props.title}</h3>  
                <h3>{price}</h3>
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