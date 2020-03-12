import React, { Component } from 'react'
import ReactFlagsSelect from 'react-flags-select'

// css
import 'react-flags-select/css/react-flags-select.css'
import './flags-selector.css'

class FlagsSelector extends Component {

    state = {
        selectedSize: 30,
        alignOptions: ''
    }

    componentDidMount() {
        this.InitLanguageDefault()
        if (window.innerWidth <= 768) {
            this.setState({
                selectedSize: 25,
                alignOptions: 'left'
            })
        }
    }

    InitLanguageDefault () {
        if (localStorage.getItem('language') === null) {
            localStorage.setItem('language', "FR")
        }
    }

    AutoReloadContactPage () {
        if(window.location.pathname === "/Contact") {
            window.location.reload();
        }
    }

    onSelectFlag = (countryCode) => {
        localStorage.setItem('language', countryCode)
        this.AutoReloadContactPage()
    }

    colorLoading () {
        if (localStorage.getItem('DarkMode') === "true") {
            return("white")
        }
        
        if (localStorage.getItem('DarkMode') === null) {
            return ("black")
        }
    }

    render() {
        if(localStorage.getItem('language')) {
            return(
                <ReactFlagsSelect
                    defaultCountry={localStorage.getItem('language')}
                    countries={["FR", "US"]}
                    className="FlagsSelector"
                    onSelect={this.onSelectFlag}
                    showSelectedLabel={false}
                    selectedSize={this.state.selectedSize}
                    alignOptions={this.state.alignOptions}/>
            )
        }
        else {
            return(null)
        }
    }
}

export default FlagsSelector