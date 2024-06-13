import React, { useState } from 'react';
import Countries from './Countries/Countries';
import SearchBar from './SearchBar/SearchBar';

function App() {

  const [searchText, setSearchText] = useState('');

  return (
    <>
    <SearchBar searchText={searchText} setSearchText={setSearchText} />
    <Countries searchText={searchText} />
    </>
  );
}

export default App;
