import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DashboardPage} from './dashboard'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DashboardPage/>
        
      </header>
    </div>
  );
}

export default App;
