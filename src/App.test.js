import React from 'react';
import ReactDOM from 'react-dom';

// Routes
import MainRouter from './Routes'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainRouter/>, div);
  ReactDOM.unmountComponentAtNode(div);
});