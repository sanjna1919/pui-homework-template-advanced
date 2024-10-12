import React, { useState } from 'react';
function SearchBar({list, setSortedProducts, setSearchMessage}){

    // state for query that user enters into search box
    const [searchQuery, setSearchQuery] = useState(''); 

    const handleInput = (e) =>{
        setSearchQuery(e.target.value);
    }

    //handles click and filters the product list
    // reference - https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
    const handleSearchClick = () => {
        setSearchQuery(document.getElementById("search-bar").value);
        const lowerCaseQuery = searchQuery.toLowerCase();

        // initialise
        // let filtered = [...list];
        
        // filtering logic
        const filteredList = list.filter(product => product.title.toLowerCase().includes(lowerCaseQuery)
        );
        setSortedProducts(filteredList);

        if (filteredList.length === 0){
            setSearchMessage("No Match!");
        };
    }

    return (
        <span className="search-bar">
            <input type='text' size="40" id="search-bar" onChange={handleInput}></input>
            <button id="searchButton" onClick={handleSearchClick}>Search</button>
        </span>
    );
}

export default SearchBar