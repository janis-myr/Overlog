import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
// import MainView from './components/MainView';
import MovieSearch from './components/MovieSearch';
import MovieInfo from './components/MovieInfo';
import VideogameSearch from './components/VideogameSearch';
import VideogameInfo from './components/VideogameInfo';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <div className="content">
        <SideBar />
        
          <Routes>
            <Route path="/"                       />
            <Route path="/movies"               element={<MovieSearch/>}  />
            <Route path="/movies/:mediaId"      element={<MovieInfo/>}    />
            <Route path="/videogames"           element={<VideogameSearch/>}  />
            <Route path="/videogames/mediaId"   element={<VideogameInfo/>}  />
          </Routes>
        
        {/* <MovieSearch /> */}
      </div>
    </div>
    </Router>
  );
}

export default App;