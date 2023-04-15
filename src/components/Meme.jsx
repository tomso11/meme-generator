import memesData from "../memesData";
import React, { useState } from 'react';

export const Meme = () => {
    const [meme, setMeme] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    const handleClick = () => {
        // Generate a random index between 0 and the length of the memeData array
        const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);

        // Get the meme object from the memeData array using the random index
        const randomMeme = memesData.data.memes[randomIndex];

        // Return the URL property from the meme object
        console.log(randomMeme);
        console.log(randomMeme.url);
        setMeme(randomMeme.url);
        
    }

    return(
        <div className="meme--container">
            <form onSubmit={handleSubmit}>
                <div className="meme--form--inputs">
                    <input type="text" placeholder="Top text" className="meme-input"></input>
                    <input type="text" placeholder="Bottom text" className="meme-input"></input>
                </div>
                <button onClick={handleClick} type="submit" className="meme-button">Get a new meme image 🖼 </button>
            </form>
            <img src={meme} className="meme--image" alt="Random Meme" />
        </div>
    )
}