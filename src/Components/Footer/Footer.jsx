import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import pic from '../../assets/images/Bottom.png'

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <div className='ml-12'>
            <img src={logo} alt="Logo" className="mb-4" />
            <h2 className="mb-4  text-black font-[500] text-[12px]">
             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </h2>
            <div className="flex items-center">
          <button className="mb-5 bg-blue-500 text-white p-2 w-[160px] h-11 hover:bg-amber-600">
          Start Live Chat
          </button>
        </div>
          </div>
          <div className='text-black ml-40'>
            <h3 className="text-lg font-bold mb-4 text-black">Company</h3>
            <ul >
              <li><Link to="/" className=" text-black hover:underline">About</Link></li>
              <li><Link to="/" className="text-black hover:underline">Features</Link></li>
              <li><Link to="/" className="text-black hover:underline">works</Link></li>
              <li><Link to="/" className="text-black hover:underline">career</Link></li>
            </ul>
          </div>
          <div className='ml-24'>
            <h3 className="text-lg font-bold mb-4 text-black">Help</h3>
            <ul>
              <li><Link to="/" className="text-black hover:underline">Customer Support</Link></li>
              <li><Link to="/" className="text-black hover:underline">Delivery Details</Link></li>
              <li><Link to="/" className="text-black hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/" className="text-black hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className='ml-16'>
            <h3 className="text-lg font-bold mb-4 text-black">Resource</h3>
            <ul>
              <li><Link to="/" className="text-black hover:underline">Free eBooks</Link></li>
              <li><Link to="/" className="text-black hover:underline">Development Tutorial</Link></li>
              <li><Link to="/" className="text-black hover:underline">How to - Blog</Link></li>
              <li><Link to="/" className="text-black hover:underline">Youtube Playlist</Link></li>
            </ul>
          </div>
          <div className='ml-6'>
            <h3 className="text-lg font-bold mb-4 text-black">Extra Links</h3>
            <ul>
              <li><Link to="/" className="text-black hover:underline">Customer Support</Link></li>
              <li><Link to="/" className="text-black hover:underline">Delivery Details</Link></li>
              <li><Link to="/" className="text-black hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/" className="text-black hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <img src = {pic}/>
      </div>
     
    </footer>
  );
};

export default Footer;
