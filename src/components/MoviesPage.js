import MovieGrid from "./MovieGrid"
import { useEffect, useState } from "react"
function MoviesPage(){
    
    const [movieGridComp, setMovieGridComp] = useState([])

    useEffect(()=>{
        setMovieGridComp(<MovieGrid searchTerm="Frozen"/>)
    }, [])

    return(
        <div className="movies-page">
            {movieGridComp}
        </div>
    )
}

export default MoviesPage
