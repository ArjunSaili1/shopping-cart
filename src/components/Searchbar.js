import '../styles/Searchbar.css'
function Searchbar(props){
    return(
        <div className="search-container">
            <h2>Search for any of your favourite movies!</h2>
            <h6>Powered by the <a href="https://developers.themoviedb.org/">The Movie Database API</a></h6>
            <form className="search-form" onSubmit={props.search}>
                <input defaultValue="Batman" className="search-bar" type="text"></input>
                <button className='search-submit' type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbar