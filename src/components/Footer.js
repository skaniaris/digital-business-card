import React from 'react';
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import GitHub from "../images/github.png";

export default function Footer() {
    return(
        <footer>
            <img src={Twitter}/>
            <img src={Facebook}/>
            <img src={Instagram}/>
            <img src={GitHub}/>
        </footer>
    ) 
}