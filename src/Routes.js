import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingPage from './LoadingPage/LoadingPage'

// Pages
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound'

export default class MainRouter extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: 'true'
        }
    }

    render () {

        setTimeout(() => {
            this.setState ({ loading: 'false' })
        }, 650);

        if (this.state.loading === 'true') {
            return (
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoadingPage}/>
                        <Route exact path="/Projets" component={LoadingPage}/>
                        <Route exact path="/Contact" component={LoadingPage} />
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>
            )
        }

        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Projets" component={Projects}/>
                    <Route exact path="/Contact" component={Contact} />
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}