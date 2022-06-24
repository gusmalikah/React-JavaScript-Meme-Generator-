import React from "react"
import "../styles/meme.css"

function Meme() {

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.png"
    })

    const [allMemeImages, setAllMemeImages] = React.useState()


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    return(
        <main>
        <div className="form">
        <input type="text"className="form-input"placeholder="Top text"/>
        <input type="text"className="form-input"placeholder="Bottom text"/>
        <button onClick={getMemeImage} className="form-button">Get a new Meme image 🤑</button>
        </div>
        <img alt="" src={meme.randomImage} className="meme-img"/>
        </main>
    )
}
export default Meme