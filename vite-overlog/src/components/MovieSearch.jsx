import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { apiKey } from './MovieKey.jsx';

// const apiKey = secrets.TMDB_APIKEY.value;

function MovieSearch() {
    
    const [searchQuery, setsearchQuery] = useState('');
    const [searchResults, setsearchResults] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        handleSearch();
    }, [searchQuery]);

    /* FILMSUCHE */
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

            <div className="media-list">
                {searchResults.map((media) => (
                    <div key={media.id} className="media-item" onClick={() => navigate(`/movies/${media.id}`)}>
                        <img
                            src={`https://image.tmdb.org/t/p/w220_and_h330_bestv2/${media.poster_path}`}
                            alt="Movie Poster"
                         />
                        <p className="media-title">{media.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )   
};


export default MovieSearch;
