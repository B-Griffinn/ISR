import React from 'react';
import './App.css';
import Navabar from "./componnets/NavBar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componnets/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navabar />

      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;