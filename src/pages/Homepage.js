import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/Homepage.css'

function Homepage(){
    return(
        <AnimatePresence>
            <motion.div 
            key="homepage"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="homepage">
                <div className="front-display">
                    <div className="front-text-ctn">
                        <h1 className="front-text">Reel Movies, Reely Great.</h1>
                        <h2 className="front-text-description">Find your next favourite movie <Link className="here-text" to="/shop">here</Link></h2>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Homepage