import React from 'react';
import './App.css';
import FetchData from "./components/FetchData"
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <p>Players</p>
      <FetchData/>
    </div>
  );
}

export default App;
