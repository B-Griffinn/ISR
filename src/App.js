import React from 'react';
import './App.css';
import Navabar from "./componnets/NavBar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navabar />

      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
    </>
  );
}

export default App;