import React from 'react';
import Customer from '../Components/Customer/Customer';
import Footer from '../Components/Footer/Footer';

function About() {
    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              About Us
            </h2>
          </div>
  
         <Customer />
         <Footer />
           
        </div>
        </>
    );
}

export default About;