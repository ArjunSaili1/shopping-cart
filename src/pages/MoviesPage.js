import MovieGrid from "../components/MovieGrid"
import Searchbar from "../components/Searchbar"
import { useEffect, useState } from "react"
function MoviesPage(){
    
    const [movieGridComp, setMovieGridComp] = useState([])

    function search(e){
        e.preventDefault()
        setMovieGridComp(<MovieGrid searchTerm={e.target[0].value}/>)
    }

    useEffect(()=>{
        setMovieGridComp(<MovieGrid searchTerm="Batman"/>)
    }, [])

    return(
        <div className="movies-page">
            <Searchbar search={search}/>
            {movieGridComp}
        </div>
    )
}

export default MoviesPage
