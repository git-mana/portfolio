import React, { useState } from "react";
// Import our custom CSS
import '../scss/styles.scss'
import { useMediaQuery } from 'react-responsive';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import project1 from '../portfolio_items/portfolio_showcase1.png'
import project2 from '../portfolio_items/portfolio_showcase2.png'
import project3 from '../portfolio_items/portfolio_showcase3.png'
import project4 from '../portfolio_items/portfolio_showcase4.png'
import mobile1 from '../portfolio_items/showcaseMobile1.png'
import mobile2 from '../portfolio_items/showcaseMobile2.png'
import mobile3 from '../portfolio_items/showcaseMobile3.png'
import mobile4 from '../portfolio_items/showcaseMobile4.png'

const Portfolio_showcase = () => {
  const isMobile = useMediaQuery({ maxWidth: 546 });
  
  return (
    <div id='portfolio'>
        <div className="mt-8 projectContainer">
             <div className='projectsLabelContainer flex flex-col justify-center items-center mt-4'> 
                <div className='projectsContainer text-[50px] font-extrabold font-alegreya text-[#2C2828]'>Projects</div>
             </div>
             <div className="rectangleDesign rectangleDesignMobile  w-full bg-[#4a8599]  mt-4 mb-4 h-[18vh]"></div>                      
        </div>
              <div id="carouselExample" className="carousel slide ml-[25vw]">
                 {isMobile ? (
                   <div className="carousel-inner">
                     <div className="carousel-item active">
                       <img src={mobile1} className="d-block h-[77vh] ml-[10vw]  mb-[1rem] " alt="mobile1" />
                     </div>
                     <div className="carousel-item">
                       <img src={mobile2} className="d-block h-[77vh] ml-[10vw]   mb-[1rem] " alt="mobile2" />
                     </div>
                     <div className="carousel-item">
                       <img src={mobile3} className="d-block h-[77vh] ml-[10vw]   mb-[1rem] " alt="mobile3" />
                     </div>
                     <div className="carousel-item">
                       <img src={mobile4} className="d-block h-[77vh] ml-[10vw]   mb-[1rem] " alt="mobile4" />
                     </div>
                   </div>
                 ) : (
                   <div className="carousel-inner">
                     <div className="carousel-item active">
                       <img src={project1} className="d-block projectshowcaseImg h-[60vh] mb-[4rem]" alt="project1" />
                     </div>
                     <div className="carousel-item">
                       <img src={project2} className="d-block projectshowcaseImg h-[60vh] mb-[4rem]" alt="project2" />
                     </div>
                     <div className="carousel-item">
                       <img src={project3} className="d-block projectshowcaseImg h-[60vh] mb-[4rem]" alt="project3" />
                     </div>
                     <div className="carousel-item">
                       <img src={project4} className="d-block projectshowcaseImg h-[60vh] mb-[4rem]" alt="project4" />
                     </div>
                   </div>
                 )}
            
                   <button
                     className="carouselLeftBtton absolute left-[-23vw] top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white px-3 py-2 rounded-full"
                     type="button"
                     data-bs-target="#carouselExample"
                     data-bs-slide="prev"
                   >
                     ‹
                   </button>

                   {/* Next Button */}
                   <button
                     className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white px-3 py-2 rounded-full"
                     type="button"
                     data-bs-target="#carouselExample"
                     data-bs-slide="next"
                   >
                     ›
                   </button>
             </div>
    </div>
  )
}

export default Portfolio_showcase