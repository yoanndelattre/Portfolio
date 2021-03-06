import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

// css
import './NotFound.css';

const NotFound = () => (
  <div id="notfound">
    <HelmetProvider>
      <Helmet>
        <title>404 Error NotFound</title>
      </Helmet>
    </HelmetProvider>
    <div className="notfound">
      <div className="notfound-404">
        <h1>404</h1>
      </div>
      <h2>Oops! This Page Could Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist.</p>
      <p>Name changed or is temporarily unavailable</p>
      <a href="/">Go To Homepage</a>
      <a target="blank" href="https://github.com/yoanndelattre/Portfolio/issues">Report a Problem</a>
    </div>
  </div>
);

export default NotFound;
