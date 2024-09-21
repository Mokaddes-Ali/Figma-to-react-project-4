import React from 'react';
import sampleImage from '../../assets/images/Image (1).png';

const Card = () => {
  return (
      <div className=" w-[550px] h-92 relative transition-transform duration-500 transform hover:translate-y-2 hover:scale-105 shadow-lg rounded-lg bg-white overflow-hidden">
        <img src={sampleImage} alt="Sample" className="w-full h-68 object-cover" />
        <div className="p-4">
          <h2 className="text-[14px]  mb-2 mt-5">November 25, 2022</h2>
          <p className="text-black text-[26px] font-bold pb-5">15+ Most Effective and Proven Time Management Techniques</p>
        </div>
      </div>
  );
};

export default Card;
