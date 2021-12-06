import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useState} from 'react';
import NavBar from './components/NavBar';
import Hello from './components/Hello'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Links from './components/Links'
import './App.css';

function App() {

const [isOpen, setIsOpen] = useState();

const handleNavBarClick = () => {
  setIsOpen(false);
}

const handleOnOpen = () => {
  setIsOpen(true);
}

const handleOnClose = () => {
  setIsOpen(false);
}


  return (
    <Router>
      <NavBar 
      isOpen={isOpen} 
      handleOnOpen={handleOnOpen} 
      handleNavBarClick={handleNavBarClick}
      handleOnClose={handleOnClose}
      />
      <Links/>
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
