import React, { useEffect, useState } from 'react';

function Header() {

    const [isOpen, setIsOpen] = useState(false);
      
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    

    // useEffect(() => {
    
    //     const mediatypeButton = document.querySelectorAll('.mediatype-button');
    
    //     mediatypeButton.forEach(function(button) {
    //         button.addEventListener('click', function() {
    //             const content = this.nextElementSibling;
    //             console.log("Button wurde geklickt");
    
    //             if (content.style.display === 'block') {
    //                 content.style.display = 'none';
    //                 this.classList.remove('active');
    //             } else {
    //                 content.style.display = 'block';
    //                 this.classList.add('active');
    //             }
    //         });
    //     });
    // }, []);
        
    return (
        <header>
         <h1> OverLog </h1> 
         <p> Log your media!</p>
         <div className="mainbar">
            <button onClick={toggleMenu} className="dropdown-button"> 
                Change Mediatype
            </button>
            {isOpen && (
                <ul className="mediatype-button-content">
                    <li>Movies</li>
                    <li>Series</li>
                    <li>Games</li>
                </ul>
            )}   
         </div>
        </header>
         
    );
};

export default Header;