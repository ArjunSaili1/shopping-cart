import MovieGrid from "./MovieGrid"
import Searchbar from "./Searchbar"
import { useEffect, useState } from "react"
function MoviesPage(){
    
    const [movieGridComp, setMovieGridComp] = useState([])

    function search(e){
        e.preventDefault()
        setMovieGridComp(<MovieGrid searchTerm={e.target.children[0].value}/>)
    }

    useEffect(()=>{
        setMovieGridComp(<MovieGrid searchTerm="Batman"/>)
    }, [])

    return(
        <div className="movies-page">
            <div className="search-container">
                <Searchbar search={search}/>    
            </div>
            {movieGridComp}
        </div>
    )
}

export default MoviesPage
