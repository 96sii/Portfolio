import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Hello from './components/Hello'
import Projects from './components/Projects'
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Route
        exact path='/' component={Hello}
      />
      <Route
        path='/projects' component={Projects}
      />
      <Route
        path='/contact' component={Contact}
      />
    </Router>
  );
}

export default App;
