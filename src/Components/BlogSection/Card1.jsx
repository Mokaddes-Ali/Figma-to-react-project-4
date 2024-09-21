import React from 'react';
import sampleImage from '../../assets/images/Image (2).png';

const Card = () => {
  return (
    <div className=" w-[550px] h-92 relative transition-transform duration-500 transform hover:translate-y-2 hover:scale-105 shadow-lg rounded-lg bg-white overflow-hidden">
    <img src={sampleImage} alt="Sample" className="w-full h-68 object-cover" />
    <div className="p-4">
      <h2 className="text-[14px] mb-2 mt-5">November 16, 2022</h2>
      <p className="text-black text-[26px] font-bold pb-5">Time tracking reports – why do you need time management?</p>
    </div>
  </div>
   
  );
};

export default Card;
