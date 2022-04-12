import { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard";
import '../styles/MovieGrid.css'
import CartContext from "../context/CartContext";
import {notFound} from "../assets";
import { motion } from "framer-motion";

function MovieGrid({searchTerm}){

    const api_key = process.env.REACT_APP_API_KEY;
    const [movieCards, setMovieCards] = useState([])
    const {cart} = useContext(CartContext);

    async function getConfig(){
      try{
        const configResponse = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`)
        const configResponseJson = configResponse.json();
        return configResponseJson;
      }
      catch(e){
        console.error(e) 
      }
    }
  
    async function queryAPI(searchTerm){
      try{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}`);
        const responseJson = response.json();
        return responseJson
      }
      catch(e){
        console.error(e)
      }
    }
  
    async function searchMovie(searchTerm){
      const movieCardArr = []
      const config = await getConfig();
      const baseUrl = config["images"]["base_url"];
      const posterSize = config["images"]["poster_sizes"][1];
      const queryResponse = await queryAPI(searchTerm);
      const movies = queryResponse["results"]
      if(movies.length !== 0){
        movies.forEach((movie)=>{
          let image = baseUrl + posterSize + movie["poster_path"]
          if(!movie["poster_path"]){
            image = notFound;
          }
          let inCart;
          cart.forEach((cartMovie)=>{
            cartMovie["title"] === movie["title"] ? inCart = true : inCart = false;
          })
          const releaseDate = movie["release_date"]
          const rating = movie["vote_average"]
          movieCardArr.push(<MovieCard key={movie.id} inCart={inCart} title={movie.title} 
            image={image} releaseDate={releaseDate} rating={rating}/> )
        })
      }
      else{
        movieCardArr.push(<h2 className="not-found" key="not-found">Sorry this movie was not found</h2>)
      }
      return movieCardArr;
    }
  
    useEffect(()=>{
      let isMounted = true;
      searchMovie(searchTerm).then((data)=>{
          if(isMounted){setMovieCards(data)}
      })
      return () => {isMounted = false}
    })

    return(
      <div className="movie-grid">
          {movieCards.map(movie => movie)}
      </div>
    )
}

export default MovieGrid