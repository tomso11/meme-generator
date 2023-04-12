import trollface from '../assets/troll-face.jpeg'

export const Header = () => {
    return(
        <nav className="navbar">
            <div className="header--title--container">
                <img className="header--logo" src={trollface} alt="logo" />
                <h1 className="header--title">Meme generator</h1>
            </div>
            <h3 className="header--subtitle">React Course - Project 3</h3>
        </nav>
    )
    
}