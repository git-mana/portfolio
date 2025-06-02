import React from 'react'
import Navbar from '../components/Navbar'
import myImg from '../portfolio_items/my_pic.JPG'
import Portfolio_showcase from '../components/Portfolio_showcase'
const Portfolio = () => {
  return (
<>
  <div className="portfolio-Container flex flex-col justify-center" >
      <Navbar/>
      <div className="photocard h-[50vh]">
        <div className="myphoto flex justify-center items-center mt-[5vh]  "><img className=' w-[20vw]  rounded-[50%] ' src={myImg} alt="" /></div>
        <div className="rectangleDesign w-full bg-[#a19999] h-[20vh] relative bottom-[17vh] -z-10"></div>
      </div>
          <div className='portfolio_content flex flex-col justify-center items-center m-4 '> 
            <div className='landpage_name text-[50px] font-extrabold font-alegreya text-[#2C2828]'>Muhammad Aman Arshad</div>
            <div className=' landpage_label text-[45px] font-extrabold font-alegreya text-[#2C2828]'>MERN stack Developer</div>
          </div>
              <div className="projectShowcaseButton flex justify-center m-4 gap-4">
                <button className="projectShowcase_Button border border-solid rounded-[13px] bg-[#2C2828] flex flex-row items-center pl-6 pr-6 pt-2 pb-2 gap-3 hover:bg-[#3b3636]" onClick={() => {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}>               
                <span className="text-white font-semibold">View Projects</span>
                </button>
              </div>
        
          <Portfolio_showcase/>
  </div>

</>
  )
}

export default Portfolio