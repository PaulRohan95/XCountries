import React, { useEffect, useState } from 'react';
import './Countries.css';

function Countries({ searchText }) {
    
const API_URL = 'https://restcountries.com/v3.1/all';

const [countries, setCountries] = useState([]);
const [result, setResult] = useState([]);

useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setCountries(data);
      setResult(data); 
    })
    .catch((error) => console.error("Error:", error));
}, []);


useEffect(() => {
  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
  );
  setResult(filtered);
}, [searchText, countries]);
    
  return (
    <div className="wrapperCard">
        {result.map((country) => (
          <div key={country.cca3} className="countryCard">
            <img               
                src={country.flags.png} 
                alt={country.flags.alt} 
                style={{ width: '100px', height: '100px' }}
            />
            <h2>{country.name.common}</h2>
          </div>
        ))}
    </div>
  )
}

export default Countries;