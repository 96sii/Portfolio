import react from 'react';
import './Projects.css'
import tracker from '../spending-tracker.png';
import chart from '../Chart.png';


const Projects = () => {

    return(
        <>
            <h1 id="projects">Projects<span id="projects-dot">()</span></h1>
            <div id="projects-box">
                <div class="project">
                    <h2 class="project-title">Spending Tracker</h2>
                    <img src={tracker}/>
                    <p class="project-info">This app allows you to add transactions to keep an eye on your spending. You can add merchants, custom categories, merchant logos and customise your budget. A 'budget bar' will dynamically warn you if you are close to going over your budget.  
                    <br></br>
                    <span class="technology-span">
                    Technologies used:
                    <ul class="tech-list">
                        <li>SQL</li>
                        <li>Python</li>
                        <li>HTML/CSS</li>
                    </ul>
                    </span>
                    </p>
                </div>
                <div class="project">
                    <h2 class="project-title">Chart-topper</h2>
                    <img src={chart}/>
                    <p class="project-info">This app gathers the top 20 UK singles using Apple iTunes' API and displays them. 
                        
                        <br></br>
                        <span class="technology-span">
                        Technologies used:
                            <ul class="tech-list">
                                <li>React.js</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </span>
                    </p>
                </div>
            </div>
        </>    

    );
}

export default Projects;