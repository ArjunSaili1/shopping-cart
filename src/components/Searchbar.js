function Searchbar(props){
    return(
        <form className="search-form" onSubmit={props.search}>
            <input defaultValue="Batman" className="search-bar" type="text"></input>
            <button className='search-submit' type="submit">Search</button>
        </form>
    )
}

export default Searchbar