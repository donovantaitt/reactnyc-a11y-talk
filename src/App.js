import './App.css';

import React, { useEffect, useRef, useState } from 'react';

import List from './List';

function App() {

  const [ text, setText ] = useState('')
  const [ favorites, setFavorites ] = useState([])

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFavorites([ ...favorites, text ])
    setText('')
  }

  return (
    <div className="App">
      <header className="App-header">
        REACT A11Y
      </header>
      <main>
        <h1>ReactNYC Favorites</h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg' alt='a red heart' class='heart' />
        <form onSubmit={handleSubmit}>
          <label htmlFor='favorite-input'>Favorite</label>
          <input id='favorite-input' type='text' value={text} onChange={handleChange} />
          <button>Add Favorite</button>
        </form>
        <ul>
          <List favorites={favorites} />
        </ul>
      </main>
    </div>
  );
}

export default App;
