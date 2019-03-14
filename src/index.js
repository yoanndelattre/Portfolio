import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Routes
import MainRouter from './Routes'

ReactDOM.render(<MainRouter/>, document.getElementById('root'));

serviceWorker.unregister();
