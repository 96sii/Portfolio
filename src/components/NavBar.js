import react from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
        <ul id="nav-bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    )
}

export default NavBar;