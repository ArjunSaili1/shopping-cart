import MovieGrid from "../components/MovieGrid"
import Searchbar from "../components/Searchbar"
import { useEffect, useState } from "react"
function MoviesPage(props){
    
    const [movieGridComp, setMovieGridComp] = useState([])

    function search(e){
        e.preventDefault()
        setMovieGridComp(<MovieGrid addItem={props.addItem} searchTerm={e.target.children[0].value}/>)
    }

    useEffect(()=>{
        setMovieGridComp(<MovieGrid addItem={props.addItem} searchTerm="Batman"/>)
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
