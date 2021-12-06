import react from 'react';
import './Projects.css'
import tracker from '../spending-tracker.png';
import chart from '../Chart.png';
import sealife from '../Sealife.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faPython } from '@fortawesome/free-brands-svg-icons';
import mongodb from '../mongodb-icon.svg';
import sql from '../sql-svgrepo-com.svg';


const Projects = () => {

    const react = <FontAwesomeIcon icon={faReact} color="#61DBFB" size="lg"/>
    const html = <FontAwesomeIcon icon={faHtml5} color="#f06529" size="lg"/>
    const css = <FontAwesomeIcon icon={faCss3} color="#2965f1"/>
    const python = <FontAwesomeIcon icon={faPython} color="#4B8BBE"/>


    return(
        <div id="project-container">
            <h1 id="projects">Projects<span id="projects-dot">()</span></h1>
            <div id="projects-box">
                <div className="project">
                    <h2 className="project-title">Sea Life App</h2>
                    <a href="https://github.com/96sii/Educational-sea-life-app" target="_blank" className="project-anchor"><img className="project-img" src={sealife}/></a>
                    <div className="project-info">
                        <p>An educational app heavily inspired by BBC bitesize. Users can learn about various sea animals, play a quiz and find the animals on an interactive map. This app was designed and built with my peers for a final project at CodeClan.</p>
                        <br></br>
                        <span className="technology-span">
                        Technologies used:
                            <ul className="tech-list">
                                <li>React.js {react}</li>
                                <li>HTML/CSS {html} {css}</li>
                                <li>MongoDB <img src={mongodb} className="icon"/></li>
                            </ul>
                        </span>
                    </div>
                </div>

                <div className="project">
                    <h2 className="project-title">Spending Tracker</h2>
                    <a className="project-anchor" target="_blank" href ="https://github.com/96sii/spending_tracker_project"><img className="project-img" src={tracker}/></a>
                    <div className="project-info">
                        <p>This app allows you to add transactions to keep an eye on your spending. You can add merchants, custom categories, merchant logos and customise your budget. A 'budget bar' will dynamically warn you if you are close to going over your budget. </p>  
                        <br></br>
                        <span className="technology-span">
                        Technologies used:
                        <ul className="tech-list">
                            <li>SQL <img src={sql} className="icon"/></li>
                            <li>Python {python}</li>
                            <li>HTML/CSS {html} {css}</li>
                        </ul>
                        </span>
                    </div>
                </div>
                

                <div className="project">
                    <h2 className="project-title">Chart-topper</h2>
                    <a href="https://chart-topper.web.app" target="_blank" className="project-anchor"><img className="project-img" src={chart}/></a>
                    <div className="project-info">
                        <p>This app gathers the top 20 UK singles using Apple iTunes' API and displays them.</p>
                        <br></br>
                        <span className="technology-span">
                        Technologies used:
                            <ul className="tech-list">
                                <li>React.js {react}</li>
                                <li>HTML/CSS {html} {css}</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>    

    );
}

export default Projects;