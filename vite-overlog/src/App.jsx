import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
// import MainView from './components/MainView';
import MovieSearch from './components/MovieSearch';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <SideBar />
        <Router>
          <Routes>
            <Route path="/" element={<MovieSearch/>} />
            {/* <Route path="/movies/:movieId" element={<MovieInfo/>} /> */}
          </Routes>
        </Router>
        {/* <MovieSearch /> */}
      </div>
    </div>
  );
}

export default App;