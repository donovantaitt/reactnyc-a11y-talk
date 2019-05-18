import './App.css';

import { Route, Switch } from 'react-router'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Link } from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        REACT A11Y
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact}  />
          <Route path='/about' component={About}  />
        </Switch>
      </main>
    </div>
  );
}

export default App;
