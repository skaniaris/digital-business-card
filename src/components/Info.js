import React from 'react';
import Profile from '../images/profile-sq.jpg'
import Linkedin from "../images/linkedin.png";
import Email from "../images/email.png";

export default function Info() {
    return(
        <header className="container">
            <div className="img-bg"></div>
            <div className="bg-color">
            <h1>Sarah Kaniaris</h1>
            <h2>Frontend Developer</h2>
            <a href="https://skaniaris.github.io/sarah-kaniaris-portfolio/">sarahkaniaris.website</a>
            <div className="contact-buttons">
                <button className="email"><img src={Email}/>Email</button>
                <button className="linkedin"><img src={Linkedin}/>LinkedIn</button>
            </div>
            </div>
        </header>
    )
}