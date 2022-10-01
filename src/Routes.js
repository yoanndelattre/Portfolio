import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}
