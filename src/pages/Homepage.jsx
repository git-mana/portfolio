import React, { useState, useEffect } from "react";

import Navbar from '../components/Navbar'
import Services from '../components/Services'
import item1 from '../portfolio_items/appearing_item1.png'
import item2 from '../portfolio_items/appearing_item2.png'
import item3 from '../portfolio_items/appearing_item3.png'
import Hirebutton from '../components/Hirebutton'
import Mern_logos from '../components/Mern_logos'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const Homepage = () => {
      const images = [item1, item2, item3];
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [isTransitioning, setIsTransitioning] = useState(false);
    
      useEffect(() => {
        const interval = setInterval(() => {
          // Start transition out
          setIsTransitioning(true);
          
          // After the transition out is complete, change image and transition in
          setTimeout(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
            setIsTransitioning(false);
          }, 500); // This should match your transition duration
        }, 1500); // Total time between transitions (including transition duration)
    
        return () => clearInterval(interval);
      }, []);
  return (
    <>
    <Navbar/>
    <div className='appearing_img flex justify-center mt-12'>  
    {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`appearing ${index}`}
              className={` w-24 h-auto transition-all duration-500 ease-in-out ${
                index === currentImageIndex
                  ? isTransitioning
                    ? 'opacity-0 scale-0'
                    : 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              }`}
            />
          ))}</div>
    <div className='landpage_content flex flex-col justify-center items-center m-4'> 
        <div className='landpage_name text-[50px] font-extrabold font-alegreya text-[#2C2828]'>Muhammad Aman Arshad</div>
        <div className=' landpage_label text-[45px] font-extrabold font-alegreya text-[#2C2828]'>Web Developer</div>
    </div>
    <div className='experience_line flex justify-center  font-alegreya text-[20px] text-[#726F6F] '>Over 2 years of learning experience as a web developer, building responsive and dynamic web applications.</div>
      <Hirebutton/>
      <Mern_logos/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Homepage