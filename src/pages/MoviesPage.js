import MovieGrid from "../components/MovieGrid"
import Searchbar from "../components/Searchbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
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
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="movies-page">
            <Searchbar search={search}/>
            {movieGridComp}
        </motion.div>
    )
}

export default MoviesPage
