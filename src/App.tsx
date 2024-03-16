import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        COINER (-_-)\m/
      </header>
      <nav className="App-nav">
        <Link to="/btc">
          <p>BTC</p>
        </Link>
        <Link to="/eth">
          <p>ETH</p>
        </Link>
        <Link to="/doge">
          <p>DOGE</p>
        </Link>
      </nav>
      <main className="App-main">
        Welcome to coiner!
      </main>
    </div>
  );
}

export default App;
