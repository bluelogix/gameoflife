import React from 'react';
import Display from './components/display';
import NavBar from './components/navbar';
import Home from './components/home';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact  path="/" component={Home} />
      <Route path="/display" component={Display} />
    </div>
  );
}

export default App;
