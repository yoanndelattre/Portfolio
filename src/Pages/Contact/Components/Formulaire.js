import React from 'react'

//css
import './Formulaire.css'

export const Formulaire = (  
    <form className="form">
        <h2>CONTACTEZ-MOI</h2>
        <p type="Nom:"><input required></input></p>
        <p type="Email:"><input required></input></p>
        <p type="Message:"><input required></input></p>
        <button>Envoyer</button>
    </form>
)