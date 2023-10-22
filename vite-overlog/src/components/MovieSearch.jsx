import React, { useState, useEffect } from 'react';

// const apiKey = secrets.TMDB_APIKEY.value;

function MovieSearch() {
    const apiKey = "912bd6961a9be1381d99cac04ba85b0e";
    const [searchQuery, setsearchQuery] = useState('');
    const [searchResults, setsearchResults] = useState([]);

    useEffect(() => {
        handleSearch();
    }, [searchQuery]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`);
            const data = await response.json();
            setsearchResults(data.results);
            
        }   catch(error) {
            console.error('Search Error', error);
        }
    }
    
    return (
        <div>
            <h1>Search for your Movie here!</h1>
            <div className="centered-container">
                <p>
                <input
                type="text"
                placeholder="Type movie name here..."
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}
                />
                </p>
            {/* <button onClick={handleSearch}>Search!</button> */}
                <p>
                <img src="src/components/tmdb_logo_short.svg" alt="SVG-Bild" width="50" height="25" />
                </p>
            </div>
            <ul>
                {searchResults.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
    
};


export default MovieSearch;
