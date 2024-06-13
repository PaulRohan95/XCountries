import React from 'react';
import './SearchBar.css';

function SearchBar({ searchText, setSearchText }) {

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
        <input type="text" 
            className="searchBar" 
            placeholder='Search for countries...'
            value={searchText}
            onChange={handleChange}
        />
    </div>
  )
}

export default SearchBar