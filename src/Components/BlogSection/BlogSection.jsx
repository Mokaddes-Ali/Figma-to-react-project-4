import React from 'react';
import Card from './Card';
import Card1 from './Card1';


const BlogSection = () => {
  return (
   <div className='container mx-auto'>
    <div className='flex justify-center items-center'>
    <h2 className="ml-[330px] mr-[450px] text-[42px] text-black font-bold mb-4 mt-14 text-center">Read our blog to learn about time management</h2>

    </div>
    <p className="ml-[330px] mr-[450px] text-[16px] text-black mb-4 text-center">Time management is the process of planning and exercising 
    conscious control of time spent on specific activities</p>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className='ml-16 mb-16 mt-5'>
      <Card/>
        </div>
        <div className="mb-16 mt-5">
         <Card1 />
        </div>
      </div>
      
      </div> 
  );
};

export default BlogSection;
