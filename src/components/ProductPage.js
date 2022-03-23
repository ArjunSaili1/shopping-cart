import { useEffect } from "react";

function ProductPage(props){

    const api_key = process.env.REACT_APP_API_KEY;

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
  
    function searchMovie(searchTerm){
      getConfig().then((data)=>{
        const baseUrl = data["images"]["base_url"];
        const posterSize = data["images"]["poster_sizes"][2];
        queryAPI(searchTerm).then((movies)=>{
          movies.results.forEach((movie)=>{
            const imageUrl = baseUrl + posterSize + movie["poster_path"];
          })
        })
      })
    }
  
    useEffect(()=>{
      searchMovie(props.searchTerm)
    }, [])

    return(
        <div></div>
    )
}

export default ProductPage