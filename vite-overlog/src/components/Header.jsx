import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function Header() {

    // Handler für toggle menu
    const [isOpen, setIsOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsOpen(false);
      };  
      
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Routing path in Element anzeigen können
    const navigate = useNavigate();
    const location = useLocation();
    const getMediaType = () => {
        const path = location.pathname.toLowerCase();

        if (path.includes('movies')) {
            return 'Movies';
        } else if (path.includes('games')) {
            return 'Games';
        } else if (path.includes('series')) {
            return 'Series';
        }

        return 'No Mediatype selected';
    };
        


    return (
        <header>
         <h1> OverLog </h1> 
         <p> Log your media!</p>
         <div className="mainbar" onMouseLeave={handleMouseLeave}>

            <button 
                    onMouseEnter={handleMouseEnter}                  
                    className="mediatype-button"> 
                Change Mediatype
            </button>

            {isOpen && (
                <ul className="mediatype-button-content">
                    <button onClick={() => navigate(`/movies`)}>Movies</button>
                    <br />
                    <button onClick={() => navigate(`/videogames`)}>Videogames</button>                   
                </ul>
            )}   
            
         </div>
        </header>
         
    );
};

export default Header;