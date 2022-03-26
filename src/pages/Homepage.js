import {frontPage, frontpage} from '../assets'

function Homepage(){
    return(
        <div className="homepage">
            <div className="front-display">
                <div className="front-img-overlay"></div>
                <img className="front-page-img" src={frontPage}></img>
                <div className="front-text-ctn">
                    <h1 className="front-text">Reel Movies, Reely Great.</h1>
                    <h2 className="front-text-description">Find your next favourite movie <a className="here-text" href="/shop">here</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Homepage