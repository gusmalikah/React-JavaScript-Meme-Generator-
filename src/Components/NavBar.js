import React from "react"
import "../styles/navBar.css"

function NavBar() {
    return(
        <nav className="nav-bar">
        <img alt="" src="../images/trollface.png" className="nav-img"/>
        <h1 className="nav-title">Meme Generator</h1>
        <h2 className="nav-text">React-JavaScript</h2>
        </nav>
    )
}
export default NavBar