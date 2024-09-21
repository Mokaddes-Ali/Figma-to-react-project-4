import React from 'react';
import AboutInner from '../Components/AboutInner/AboutInner';
import CTA from '../Components/CTA/CTA';
import BlogSection from '../Components/BlogSection/BlogSection';
import TestimonialSection from '../Components/TestimonialSection/TestimonialSection';
import Customer from '../Components/Customer/Customer';
import Footer from '../Components/Footer/Footer';
import StaticSection from '../Components/StaticSection/StaticSection';
import Timemanage from '../Components/Timemange/Timemange';

function Home(props) {
    return (
        <div>
            <AboutInner />
            <Customer />
            <Timemanage />
            <StaticSection />
            <TestimonialSection />
           <BlogSection />
           <CTA />
           <Footer />
        </div>
    );
}

export default Home;