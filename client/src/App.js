import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import SearchBar from './Components/searchBar';
import Saved from './Components/Saved';
import Latest from './Components/Latest';
import Results from './Components/Results';
import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div id="big-wrapper">

        <Route exact path="/" component={Saved} /> 
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
