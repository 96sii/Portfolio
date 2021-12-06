import {Link} from 'react-router-dom';
import {fallDown as Menu} from 'react-burger-menu';
import './NavBar.css';


const NavBar = ({isOpen, handleNavBarClick, handleOnOpen, handleOnClose}) => {

    return(
            <Menu 
            isOpen={isOpen}
            onOpen={handleOnOpen}
            onClose={handleOnClose}
            width='200px' 
            heigth='100%'
            id="nav-bar" >
                <Link onClick={handleNavBarClick} className="nav-link" to="/">Home</Link>
                <Link onClick={handleNavBarClick}  className="nav-link" to="/projects">Projects</Link>
                <Link onClick={handleNavBarClick}  className="nav-link" to="/contact">Contact</Link>
            </Menu>
    )
}

export default NavBar;