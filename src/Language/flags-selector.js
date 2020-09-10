import React, {Component} from 'react';
import ReactFlagsSelect from 'react-flags-select';
import detectBrowserLanguage from 'detect-browser-language';
import {selectedSize, alignOptions} from './assets/style';

// css
import 'react-flags-select/css/react-flags-select.css';
import './flags-selector.css';

const flagsSelecting = () => {
  if (localStorage.getItem('language') === 'FR') {
    return ('fr');
  }
  if (localStorage.getItem('language') === 'US') {
    return ('en');
  }
};

class FlagsSelector extends Component {
  state = {
    updateflagsSelecting: '',
  }

  componentDidMount() {
    this.initLanguageDefault();
  }

  initLanguageDefault() {
    if (localStorage.getItem('language') === null) {
      if (detectBrowserLanguage() === 'fr-FR') {
        localStorage.setItem('language', 'FR');
      } else {
        localStorage.setItem('language', 'US');
      }
    }
    this.updateflagsSelecting();
    this.props.updateflagsSelecting();
    flagsSelecting();
  }

  updateflagsSelecting = () => {
    this.setState({
      updateflagsSelecting: localStorage.getItem('language'),
    });
  }

  onSelectFlag = (countryCode) => {
    localStorage.setItem('language', countryCode);
    this.props.updateflagsSelecting();
    flagsSelecting();
  }

  render() {
    if (localStorage.getItem('language')) {
      return (
        <ReactFlagsSelect
          defaultCountry={localStorage.getItem('language')}
          countries={['FR', 'US']}
          className="FlagsSelector"
          onSelect={this.onSelectFlag}
          showSelectedLabel={false}
          selectedSize={selectedSize()}
          alignOptions={alignOptions()}/>
      );
    } else {
      return (null);
    }
  }
}

export default FlagsSelector;
export {flagsSelecting};
