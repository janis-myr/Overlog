import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from './VideogameKey.jsx';

function VideogameInfo() {
    
    const {mediaId} = useParams();
    const [mediaData, setmediaData] = useState({});

    console.log("mediaID aus der URL");
    console.log(mediaId);
    
/* FILMDATEN ANFRAGEN UND VERARBEITEN */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setmediaData(data);
                console.log('Data.results: ', data);
                console.log('mediaData:', mediaData);
                
            } catch(error) {
                console.error('Media Data Retrieval Error', error);
            }
        };

        fetchData();
    }, [apiKey, mediaId]);

    if (mediaData === null) {
        // Hier können Sie eine Ladeanzeige oder Fehlerbehandlung einfügen, bis die Daten geladen sind
        return <div>Lade...</div>;
    }

/* HTML */
    return (
        <div className="media-details">
            <div className="image-container">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${mediaData.poster_path}`} alt="Movie Poster" />
            </div>
            <div className="title-container">
                <h2>{mediaData.title}</h2>
                <p>{mediaData.overview}</p>
            </div>
            <div className="details-container">
                <p>Popularity: {mediaData.popularity}</p>
                <p>Release Date {mediaData.release_date}</p>
                <p>Original Language: {mediaData.original_language}</p>
                
            </div>
        </div>
    );
}

        
export default VideogameInfo;