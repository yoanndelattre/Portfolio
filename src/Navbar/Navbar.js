import React from 'react'

//css
import './Navbar.css'

const Navbar = (
    <header>
        <div className="link">
            <h1>Portfolio</h1>
            <a href="Contact" >Contact</a>
            <a href="/Projets" >Projets</a>
            <a href="/" >Home</a>
            <a className='smart-screen' href="/" >Home</a>
            <a className='smart-screen' href="/Projets" >Projets</a>
            <a className='smart-screen' href="Contact" >Contact</a>
        </div>
    </header>
)

export default Navbar