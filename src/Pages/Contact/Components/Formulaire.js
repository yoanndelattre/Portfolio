import React from 'react'

//css
import './Formulaire.css'

export const Formulaire = (  
    <div className="contact-container">
        <form className="form">
            <h2>CONTACT US</h2>
            <p type="Name:"><input required placeholder="Write your name here.."></input></p>
            <p type="Email:"><input required placeholder="Let us know how to contact you back.."></input></p>
            <p type="Message:"><input required placeholder="What would you like to tell us.."></input></p>
            <button>Send Message</button>
        </form>
    </div>
)