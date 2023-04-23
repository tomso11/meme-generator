import memesData from "../memesData";
import React, { useEffect, useState } from 'react';

export const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg"
    });

    const [formData, setFormData] = useState({
        topFormText: "",
        bottomFormText: "",
    });

    const [allMemes, setAllMemes] = useState(memesData)

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, []);

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData =>{
                    return ({
                        ...prevFormData,
                        [name] : value
                    })
                });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        

        setMeme(prevMeme => {
            return ({
                ...prevMeme,
                topText: formData.topFormText,
                bottomText: formData.bottomFormText
                })}
        );
    }


    const getMemeImage = () => {
        // Generate a random index between 0 and the length of the memeData array
        const randomIndex = Math.floor(Math.random() * allMemes.length);

        // Get the meme object from the memeData array using the random index
        const randomMeme = allMemes[randomIndex];

        // Return the URL property from the meme object
        console.log(randomMeme);
        console.log(randomMeme.url);
        setMeme(prevMeme => {
            return ({
                ...prevMeme,
                url: randomMeme.url
            })});
        
    }

    return(
        <div className="meme--container">
            <form onSubmit={handleSubmit}>
                <div className="meme--form--inputs">
                    <input type="text" placeholder="Top text" className="meme-input" name="topFormText" value={formData.topFormText} onChange={handleChange}></input>
                    <input type="text" placeholder="Bottom text" className="meme-input" name="bottomFormText" value={formData.bottomFormText} onChange={handleChange}></input>
                </div>
                <button onClick={getMemeImage} type="submit" className="meme-button">Get a new meme image 🖼 </button>
            </form>
            <div className="meme">
                <img src={meme.url} className="meme--image" alt="Random Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}