import React, { Component } from 'react'
import {getGeoInfo} from './location'
import ReactFlagsSelect from 'react-flags-select'

// css
import 'react-flags-select/css/react-flags-select.css'
import './flags-selector.css'

class FlagsSelector extends Component {

    state = {
        selectedSize: '30',
        alignOptions: ''
    }

    componentDidMount() {
        getGeoInfo()
        if (window.innerWidth <= 768) {
            this.setState({
                selectedSize: '25',
                alignOptions: 'left'
            })
        }
    }

    onSelectFlag(countryCode){
        localStorage.setItem('language', countryCode)
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