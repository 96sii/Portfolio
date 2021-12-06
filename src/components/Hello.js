import React from 'react';
import './Hello.css';
import me from '../Me.jpeg'


const Hello = () => {

    return ( 
        <div id = 'hello-box' >
            <div className = "typewriter" >
                <h1 id="hello">Hello<span id ="hello-dot">.</span></h1>
            </div> 
            <br></br>
            <div id="profile-box">
                <p id="profile">My name is is Simon and I'm a web developer based in Edinburgh, Scotland.</p>
            </div>
                <img id="img-me" src={me}/>
        </div>
    )
}
export default Hello;