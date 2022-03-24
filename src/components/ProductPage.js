import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function ProductPage(props){

    const api_key = process.env.REACT_APP_API_KEY;

    const [movieCards, setMovieCards] = useState([])

    async function getConfig(){
      try{
        const configResponse = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`)
        const configResponseJson = configResponse.json();
        return configResponseJson;
      }
      catch{
        console.log("error") 
      }
    }
  
    async function queryAPI(searchTerm){
      try{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}`);
        const responseJson = response.json();
        return responseJson
      }
      catch{
        console.log("uh oh")
      }
    }
  
    async function searchMovie(searchTerm){
      const movieCardArr = []
      const config = await getConfig();
      const baseUrl = config["images"]["base_url"];
      const posterSize = config["images"]["poster_sizes"][2];
      const queryRespone = await queryAPI(searchTerm);
      const movies = queryRespone["results"]
      movies.forEach((movie)=>{
          const image = baseUrl + posterSize + movie["poster_path"]
          const releaseDate = movie["release_date"]
          const rating = movie["vote_average"]
          movieCardArr.push(<MovieCard key={movie.id} title={movie.title} 
            image={image} releaseDate={releaseDate} rating={rating}/> )
      })
      return movieCardArr;
    }
  
    useEffect(()=>{
      searchMovie(props.searchTerm).then((data)=>{
          setMovieCards(data)
      })
    }, [])

    return(
        <div>
            {movieCards.map(movie => movie)}
        </div>
    )
}

export default ProductPage