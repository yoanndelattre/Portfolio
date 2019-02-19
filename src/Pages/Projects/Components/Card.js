import React, { Component } from 'react'

//css
import './Card.css'

export default class Card extends Component {
    render () {
        return (
            <div class="maincontainer">
                <div class="thecard">

                    <div class="thefront"><h1>Front of Card</h1></div>

                    <div class="theback"><h1>Back of Card</h1></div>
        
                </div>
            </div>
        )
    }
}
