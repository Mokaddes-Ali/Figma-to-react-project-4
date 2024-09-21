import React from 'react';
import card1 from '../../assets/images/Progress.png'
import card2 from '../../assets/images/Frame 2890.png';
import card3 from '../../assets/images/Sub Task (8).png';

const StaticSection = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-[42px] font-bold mb-4 ml-5 mr-20 mt-5">Organize and plan how you can divide your time</h2>
          <p className=" text-black mb-4 ml-5 mr-20 text-[18px] font-[500]">
          Time management helps you prioritize your tasks so that you ensure you have enough time available to complete.
          </p>
          <p className="text-gray-700 ml-5 mr-24 text-[15px] font-[400] mb-5">Time plays a significant role in our life. Time helps good habit of structuring and organizing our daily activities. 
            If you understand the value of time better, you can gain experience and develop.</p>
        </div>
        <div className="">
          <img className = "ml-[290px]  -mb-[60px]" src={card1} alt="card1"  />
          <img className = "ml-[270px] mb-[25px]" src={card2} alt="card2"  />
          <img className = "-ml-20 -mt-[500px] -mb-[50px]" src={card3} alt="card3" />
          
        </div>
      </div>
    </div>
  );
};

export default StaticSection;
