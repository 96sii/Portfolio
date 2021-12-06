import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';	
import './Links.css'

const Links = () => {
    
    const linkedIn = <FontAwesomeIcon className="icon" icon={faLinkedin} color="#0077b5" size="lg"/>
    const gitHub = <FontAwesomeIcon className="icon" icon={faGithubSquare} color="black" size="lg"/>

    return (
        <div id="links-box">
            <a href="https://www.linkedin.com/in/simon-fraser23">{linkedIn}</a>
            <a href="https://github.com/96sii">{gitHub}</a>
        </div>
    )
}

export default Links; 
