import memesData from "../memesData";

export const Meme = () => {
    const handleClick = () => {
        // Generate a random index between 0 and the length of the memeData array
        const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);

        // Get the meme object from the memeData array using the random index
        const randomMeme = memesData.data.memes[randomIndex];

        // Return the URL property from the meme object
        console.log(randomMeme.url);
    }

    return(
        <div className="meme--container">
            <form>
                <div className="meme--form--inputs">
                    <input type="text" placeholder="Top text" className="meme-input"></input>
                    <input type="text" placeholder="Bottom text" className="meme-input"></input>
                </div>
                <button onClick={handleClick} type="submit" className="meme-button">Get a new meme image 🖼 </button>
            </form>
        </div>
    )
}