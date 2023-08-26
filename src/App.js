import React from "react";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Singlemovie from "./components/Singlemovie";
import Home from "./components/Home";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import PopularMovie from "./components/PopularMovie";
import SearchedResult from "./components/SearchedResult";
import TV from "./components/TV";
import Genres from "./components/Genres";

import './App.css'
function App() {
  return (
   
    <Router>
    <Navbar />
   
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={PopularMovie} path="/popular"/>
        <Route Component={TV} path="/TvShows"/>
        
        <Route  Component={Singlemovie} path='/movie/:id'/>
        <Route  Component={Singlemovie} path='/popular/movie/:id'/>
        <Route  Component={Singlemovie} path='/TvShows/movie/:id'/>
        <Route  Component={Singlemovie} path='/genres/:genreName/movie/:id'/>
        <Route  Component={Singlemovie} path='/movies/:moviename/movie/:id'/>
        <Route Component={SearchedResult} path = '/movies/:moviename'/>
        <Route Component={Genres} path = '/genres/:type'/>
        <Route Component={Error} path="*"/>
      </Routes>
     
    </Router>
    
  );
}

export default App;
