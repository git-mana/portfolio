import React, { useState } from "react";
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import project1 from '../portfolio_items/portfolio_showcase1.png'
import project2 from '../portfolio_items/portfolio_showcase2.png'
import project3 from '../portfolio_items/portfolio_showcase3.png'
import project4 from '../portfolio_items/portfolio_showcase4.png'
const images = [project1, project2, project3, project4];
const Portfolio_showcase = () => {

  
  return (
    <div id='portfolio'>
        <div className="mt-8 projectContainer">
             <div className='projectsLabelContainer flex flex-col justify-center items-center mt-4'> 
                <div className='projectsContainer text-[50px] font-extrabold font-alegreya text-[#2C2828]'>Projects</div>
             </div>
             <div className="rectangleDesign w-full bg-[#a19999]  mt-4 mb-4 h-[18vh]"></div>                      
        </div>
            <div id="carouselExample" className="carousel slide ml-[25vw]">
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                    <img src={project1} className="d-block projectshowcaseImg h-[60vh] mb-[4rem]" alt=""/>
                  </div>
                  <div className="carousel-item ">
                    <img src={project2} className="d-block projectshowcaseImg h-[60vh] mb-[4rem]" alt=""/>
                  </div>
                  <div className="carousel-item ">
                    <img src={project3} className="d-block projectshowcaseImg h-[60vh] mb-[4rem]" alt=""/>
                  </div>
                  <div className="carousel-item ">
                    <img src={project4} className="d-block projectshowcaseImg h-[60vh] mb-[4rem]" alt=""/>
                  </div>
                </div>
                {/* Previous Button */}
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