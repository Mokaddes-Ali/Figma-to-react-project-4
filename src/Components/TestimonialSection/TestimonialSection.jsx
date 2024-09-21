import React from 'react';
import sampleImage1 from '../../assets/images/Avatar (2).png';
import sampleImage2 from '../../assets/images/Avatar (3).png';
import sampleImage3 from '../../assets/images/Ellipse 4 (1).png';
import pic1 from '../../assets/images/10.png';
import pic2 from '../../assets/images/6.png';
import pic3 from '../../assets/images/8.png';
import pic4 from '../../assets/images/Page-1.png';
import pic5 from '../../assets/images/🖥-Landing-Pages.png';
import pic6 from '../../assets/images/Divider (6).png';

const TestimonialSection = () => {
  return (
   
    <div className=" bg-blue-600">
     <img className='bg-white' src = {pic6} />
      <div className='container mx-auto pt-14 pb-10'>
      <h2 className=" testimonilHeading font-bold mb-8 text-center text-white text-[42px] pl-52 pr-52">You are not alone. 
      The pain of website creation is real</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className=" Card1 bg-white shadow-lg rounded-lg pl-5 pt-5">
        <img src={sampleImage1} alt="Sample" className="h-20 w-20 object-cover  rounded-full mr-4" />
          <p className="text-gray-700 mb-4">
          “The easiest and most accurate way to track time across teams and finish the projects. Timely's automatic.”
          </p>
          <h3 className="text-xl font-bold text-[18px] pt-5">Jerome Bell</h3>
          <p  className='text-[16px]'>CTO, Waverio</p>
        </div>
        <div className=" Card2 bg-white shadow-lg rounded-lg p-4">
        <img src={sampleImage2} alt="Sample" className="h-20 w-20 object-cover  rounded-full mr-4" />
          <p className="text-gray-700 mb-4">
          “It is a time tracking solution that helps employees track hours across multiple tasks and projects that software.”
          </p>
          <h3 className="text-xl font-bold text-[18px]">Leslie Alexander</h3>
          <p className='text-[16px]'>President of Marketing, SS</p>
        </div>
        <div className="card3 bg-white shadow-lg rounded-lg p-4">
        <img src={sampleImage3} alt="Sample" className="h-20 w-20 object-cover  rounded-full mr-4" />
          <p className="text-gray-700 mb-4">
          “A simple and affordable solution for capturing employee time to run payroll, invoice clients and manage productivity.”
          </p>
          <h3 className="text-xl font-bold text-[18px]">Wade Warren</h3>
          <p  className='text-[16px]'>Founder, Creaty</p>
        </div>
      </div>
      <div className="images">
        <h1 className="heading mb-8 text-center text-white text-[18px] pt-16 pb-5">Trusted by world class business owners</h1>
      <div className="flex justify-center space-x-32 pb-10">
        <img src={pic1} alt="Client 1" className="" />
        <img src={pic2} alt="Client 2" className="" />
        <img src={pic3}alt="Client 3" className="" />
        <img src={pic4}alt="Client 4" className="" />
        <img src={pic5} alt="Client 5" className="" />
        </div>
      </div>
      </div>
    </div>
   
  );
};

export default TestimonialSection;