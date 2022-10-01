import React from 'react';
import {render} from '@testing-library/react';
import Home from './Pages/Home/Home';

test('renders Home Page', () => {
  const {getByText} = render(<Home/>);
  const linkElement = getByText(/Yoann Delattre | Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
