import MovieGrid from "./MovieGrid"
import Searchbar from "./Searchbar"
import { useEffect, useState } from "react"
function MoviesPage(){
    
    const [movieGridComp, setMovieGridComp] = useState([])

    useEffect(()=>{
        setMovieGridComp(<MovieGrid searchTerm="Batman"/>)
    }, [])

    return(
        <div className="movies-page">
            <div className="search-container">
                <Searchbar/>    
            </div>
            {movieGridComp}
        </div>
    )
}

export default MoviesPage
