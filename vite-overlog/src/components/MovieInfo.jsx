import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieInfo() {
    const apiKey = "912bd6961a9be1381d99cac04ba85b0e";
    const {movieId} = useParams();
    const [movieData, setmovieData] = useState({});

    console.log("movieID aus der URL");
    console.log(movieId);
    
/* FILMDATEN ANFRAGEN UND VERARBEITEN */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setmovieData(data);
                console.log('Data.results: ', data);
                console.log('movieData:', movieData);
                
            } catch(error) {
                console.error('Movie Data Retrieval Error', error);
            }
        };

        fetchData();
    }, [apiKey, movieId]);

    if (movieData === null) {
        // Hier können Sie eine Ladeanzeige oder Fehlerbehandlung einfügen, bis die Daten geladen sind
        return <div>Lade...</div>;
    }

/* HTML */
    return (
        <div className="media-details">
            <div className="image-container">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieData.poster_path}`} alt="Movie Poster" />
            </div>
            <div className="title-container">
                <h2>{movieData.title}</h2>
                <p>{movieData.overview}</p>
            </div>
            <div className="details-container">
                <p>Popularity: {movieData.popularity}</p>
                <p>Release Date {movieData.release_date}</p>
                <p>Original Language: {movieData.original_language}</p>
                
            </div>
        </div>
    );
}

        
export default MovieInfo;