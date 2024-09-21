import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Demos from './Pages/Demos';
import Login from './Pages/Login';
import Home from './Pages/Home';
import GetStartedFree from './Pages/GetStartedFree';
import Blog from './Pages/Blog';
import Pages from './Pages/Pages';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/GetStartedFree" element={<GetStartedFree />} />
      </Routes>
    </Router>
  );
}

export default App;