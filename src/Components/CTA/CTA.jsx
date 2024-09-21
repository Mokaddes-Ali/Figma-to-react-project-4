import React from 'react';
import shap1 from '../../assets/images/Mask Group.png';
import divider from '../../assets/images/Divider (7).png';

function CTA() {
  return (
    <div><img className='bg-[#FFC947] w-full' src = {divider} />
    <div className="bg-[#FFC947] flex items-center justify-center h-80">
      
      <img className='-ml-[600px] -rotate-12  mb-32' src = {shap1} />
      <div className="text-center ">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6 flex text-center">Work smarter with this time management and not hard, join our newsletter for a better experience</p>
        <div className="flex items-center">
          <input 
            type="text" 
            className="border border-gray-300 rounded-l w-96 -mr-36 p-4 ml-40" 
            placeholder="Enter your email address" 
          />
          <button className="bg-black text-white rounded-xl h-11 w-44 -ml-10 ">
          Get started now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CTA;
