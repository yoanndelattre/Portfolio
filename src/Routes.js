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
        <Route exact path="/" element={Home}/>
        <Route exact path="/Projects" element={Projects}/>
        <Route exact path="/Contact" element={Contact} />
        <Route path="*" element={NotFound}/>
      </Routes>
    </Router>
  );
}
