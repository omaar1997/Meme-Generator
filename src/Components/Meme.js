import React, { useState } from "react";
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    //const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg")
    function getData() {
        var item = allMemeImages.data.memes;
        var item1 = item[Math.floor(Math.random() * item.length)];
        const url = item1.url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const [name, value] = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">
                <input className="input" type={"text"} placeholder="Hello" name="topText" value={meme.topText} onChange={handleChange}></input>
                <input className="input" type={"text"} placeholder="There" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                <button className="button" type="button" onClick={getData}>Get a new meme image  🖼</button>
                <img src={meme.randomImage} className="meme-image" />
            </div>
        </main>
    )
}




/*<div className="meme">
                
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
</div>*/