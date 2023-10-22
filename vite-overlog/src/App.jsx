import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/" component={MovieSearch} />
          <Route path="/movies/:movieId" component={MovieInfo} />
        </Switch>
        {/* <MovieSearch /> */}
      </div>
    </div>
  );
}

export default App;