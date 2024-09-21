import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#FAF8F3] p-4 h-16 w-screen">
      <div className="container flex justify-start items-center">
        <div className="text-black text-lg font-bold mx-16">
          <Link to="/"><img src = {logo} /></Link>
        </div>
        <div className="space-x-12 mx-16">
          <Link to="/demos" className="text-black ">Demos</Link>
          <Link to="/about" className="text-black">About</Link>
          <Link to="/contact" className="text-black">Contact</Link>
          <Link to="/Blog" className="text-black">Blog</Link>
          <Link to="/Pages" className="text-black">Pages</Link>
          <Link to="/login" className="text-black  pl-[240px]">Login</Link>
          <Link to="/GetStartedFree" className="text-white">
          <button className="bg-blue-500 text-white p-2 w-36 -ml-11 ">
          Get Started Free
          </button>
          
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;