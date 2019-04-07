import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'

// Pages
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound'

export default function MainRouter () {

    ReactGA.initialize(process.env.TOKEN_GOOGLE_ANALYTICS);

    function fireTracking() {
        ReactGA.pageview(window.location.hash);
    }

    return (
        <Router onUpdate={fireTracking}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Projets" component={Projects}/>
                <Route exact path="/Contact" component={Contact} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    )
}