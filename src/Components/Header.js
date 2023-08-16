import React from "react";
import image from '../images/Troll Face.png'

export default function Header(){
    return(
        <div className="header">
            <img src={image} />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-name">React Course - Project 3</h4>
        </div>
    )
}