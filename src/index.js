import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// css
import './index.css';

// Routes
import MainRouter from './Routes';

ReactDOM.render(<MainRouter/>, document.getElementById('root'));

serviceWorker.unregister();
