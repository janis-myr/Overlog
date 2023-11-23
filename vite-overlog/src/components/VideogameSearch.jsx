import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// const apiKey = secrets.TMDB_APIKEY.value;

function VideogameSearch() {
    const apiKey = "17b9f5d2f9744eeb854b9f36aac5923c";
    const [searchQuery, setsearchQuery] = useState('');
    const [searchResults, setsearchResults] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        handleSearch();
    }, [searchQuery]);

    /* VIDEOGAMESUCHE */
    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.rawg.io/api/games/?search=${searchQuery}&api_key=${apiKey}`);
            const data = await response.json();
            setsearchResults(data.results);
            
        }   catch(error) {
            console.error('Search Error', error);
        }
    }
    
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
                            src={`https://image.tmdb.org/t/p/w220_and_h330_bestv2/${movie.poster_path}`}
                            alt="Game Poster"
                         />
                        <p className="media-title">{media.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )   
};


export default VideogameSearch;
