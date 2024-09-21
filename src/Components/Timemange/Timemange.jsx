import React from 'react';
import pic1 from '../../assets/images/Divider (5).png';
import shap from '../../assets/images/Mask Group.png';
import card1 from '../../assets/images/2 (2).png';
import card2 from '../../assets/images/4 (2).png';
import card3 from '../../assets/images/Card (2).png';

const Timemanage = () => {
  return (
    <div className=''> 
    <img className='bg-[#FAF8F3]' src = {pic1} />
    <div className="flex flex-col md:flex-row items-center justify-center h-68 bg-[#FAF8F3] ">
    <div className='bg-[#FFC947] rounded-full h-[420px] w-[420px] ml-12 mb-10'>
       <img src={shap} alt="shap" />
       <img className='-mt-[370px] h-84 w-72 ml-14 rounded-br-[15px]' src = {card3} />
       <img className=' -mt-[250px] ml-64' src = {card1} />
       <img className='-mt-[280px] ml-40 ' src = {card2} />
     
    
     </div>
      <div className="w-full md:w-1/2 md:mt-0">
        <h2 className="text-[42px] font-bold mb-4 ml-36 mr-20">Excellent way to use your busy time smartly</h2>
        <p className="text-black mb-4 ml-36 mr-20 text-[18px] font-[500]">
        Time management is the process of planning 
        and exercising conscious control of specific activities
        </p>
        <p className="text-gray-700 ml-36 mr-24 text-[15px] font-[400]">
        Get it right, and you'll end up working smarter to get more done in 
        less time. Drawing up a to-do list might not seem like a groundbreaking technique.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Timemanage;
