import React, {Component, Fragment} from 'react';

// ico
import SunIco from './ico/sun.png';
import MoonIco from './ico/moon.png';

// css
import './SliderColorMode.css';

const darkModeSelecting = () => {
  if (localStorage.getItem('DarkMode') === 'true') {
    return true;
  }

  if (localStorage.getItem('DarkMode') === null) {
    return false;
  }
};

class ColorMode extends Component {
  componentDidMount() {
    darkModeSelecting();
  }

  handleChange = (event) => {
    if (event.target.checked === true) {
      localStorage.setItem('DarkMode', true);
    }
    if (event.target.checked === false) {
      localStorage.removeItem('DarkMode');
    }
    darkModeSelecting();
  }

  render() {
    return (
      <Fragment>
        <img
          className="ico-sun"
          src={SunIco}
          alt="sun mode"
        />
        <label className="switch">
          <input
            defaultChecked={localStorage.getItem('DarkMode')}
            onChange={this.handleChange}
            type="checkbox"
          />
          <span className="slider"></span>
        </label>
        <img
          className="ico-moon"
          src={MoonIco}
          alt="sun mode"
        />
      </Fragment>
    );
  }
};

export default ColorMode;
export {darkModeSelecting};
