import React from "react"
import "../styles/meme.css"

function Meme() {

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)  
        }
        getMemes()
        }, [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    function handleChange(event) {
        const {name, value} = event.target        
        setMeme(prevMeme=> ({
            ...prevMeme,
            [name]:value
        }))

    }
    return(
        <main>
        <div className="form">
        <input type="text"
        className="form-input"
        placeholder="Top text"
        name="topText"
        onChange={handleChange}
        value={meme.topText}
        />
        <input type="text"
        className="form-input"
        placeholder="Bottom text"
        name="bottomText"
        onChange={handleChange}
        value={meme.bottomText}
        />
        <button onClick={getMemeImage}
        className="form-button">
        Get a new Meme image 🤑
        </button>
        </div>
        <div className="meme">
        <h2 className="meme-text top">{meme.topText}</h2>
        <img alt="" src={meme.randomImage}
        className="meme-img"/>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
        </main>
    )
}
export default Meme