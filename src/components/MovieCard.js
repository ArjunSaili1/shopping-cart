import { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import { AnimatePresence, motion } from "framer-motion";

function MovieCard({title, image, releaseDate, rating}){

    const[showAdd, setShowAdd] = useState(true);
    const {addItemToCart} = useContext(CartContext);

    const giveCartMovieDetails = (e) =>{
        setShowAdd(false)
        const movieDetails = {
            title: title,
            image: image,
            price: price,
            showAdd: ()=>{setShowAdd(true)},
        }
        addItemToCart(movieDetails)
    }

    const price = releaseDate? "$".concat(releaseDate.substring(0,2)-0.01) : "Unavailable"

    return(
        <AnimatePresence>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{
                duration: 0.3
            }}
            className="movie-card">
                <div className="movie-details">
                    <img className="movie-img" alt={title} src={image}></img>
                    <h2>{title}</h2>  
                    <h3>{price}</h3>
                    <h4>{releaseDate}</h4>
                    <h5>{releaseDate ? rating + "/10" : null}</h5>
                </div>
                <div className="add-btn-container">
                    {releaseDate && showAdd ? 
                        <motion.button
                        key={title}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95, opacity: 0}}
                        className="add-btn" 
                        onClick={giveCartMovieDetails}>Add to Cart</motion.button>
                    : null}
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default MovieCard