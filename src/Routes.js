import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'

export default function MainRouter () {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Projects" component={Projects}/>
                <Route exact path="/Contact" component={Contact} />
            </div>
        </Router>
    )
}