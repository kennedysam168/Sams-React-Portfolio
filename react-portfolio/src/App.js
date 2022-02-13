import React from 'react';
import 'react-portfolio/src/App.css';
import Icon from './components/icon';
import Navbar from './components/navbar';
import Name from './components/name'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/projects' element= {<Projects />} />
    </Routes>
    <Icon />
    <Name />
    </Router>
  )
};

export default App;
