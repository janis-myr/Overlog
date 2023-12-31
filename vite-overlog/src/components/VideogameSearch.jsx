import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { apiKey } from './VideogameKey.jsx';

// const apiKey = secrets.TMDB_APIKEY.value;

function VideogameSearch() {
    
    const [searchQuery, setsearchQuery] = useState('');
    const [searchResults, setsearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        handleSearch();
    }, [searchQuery]);

    /* VIDEOGAMESUCHE */
    const handleSearch = _.debounce(async () => {
        try {
            if (searchQuery.trim() !== '') {
                const response = await fetch(`https://api.rawg.io/api/games?search=${searchQuery}&key=${apiKey}`);
                const data = await response.json();
                setsearchResults(data.results);
            } else {
                setsearchResults([]);
            }
        } catch (error) {
            console.error('Search Error', error);
        }
    }, 800);
    
    return (
        <div>
            <h1>Search for your Videogame here!</h1>
            <div className="centered-container">
                <p>
                <input
                type="text"
                placeholder="Type game name here..."
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}
                />
                </p>
           
                <p>
                <img src="src/components/tmdb_logo_short.svg" alt="SVG-Bild" width="50" height="25" />
                </p>
            </div>

            <div className="media-list">
                {searchResults.map((media) => (
                    <div key={media.id} className="media-item" onClick={() => navigate(`/videogames/${media.id}`)}>
                        <img
                            src={media.background_image}
                            alt="Game Poster"
                         />
                        <p className="media-title">{media.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )   
};


export default VideogameSearch;
