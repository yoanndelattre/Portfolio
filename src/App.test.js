import React from 'react';
import {render} from '@testing-library/react';
import MainRouter from './Routes';

test('renders Home Page', () => {
  const {getByText} = render(<MainRouter/>);
  const linkElement = getByText(/Yoann Delattre | Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
