import React from 'react'
import item1 from '../portfolio_items/portfolio items1.png'
import item2 from '../portfolio_items/portfolio items2.png'
import item3 from '../portfolio_items/portfolio items3.png'
import item4 from '../portfolio_items/portfolio items4.png'
const Services = () => {
  return (
   <>
   <div className='serviceContainer flex flex-col justify-center items-center mt-20'> 
      <div className='serviceLabel text-[50px] font-extrabold font-alegreya text-[#2C2828]'>Services</div>
    </div>
    <div className='services_line flex justify-center  font-alegreya text-[20px] text-[#726F6F] '>"I follow a standardized development workflow based on best practices in full-stack JavaScript, enabling me to deliver reliable and consistent MERN stack solutions across all projects I work on."</div>
     <div className="service_items flex justify-center items-center gap-10 mt-5">
      <img src={item4} alt="React" className="w-auto h-auto" />
      <img src={item1} alt="Node.js" className="w-auto h-auto" />
      </div>
      <div className=" service_items flex justify-center items-center gap-10 mt-5">
      <img src={item2} alt="React" className="w-auto h-auto" />
      <img src={item3} alt="Node.js" className="w-auto h-auto" />
      </div>
   </>
  )
}

export default Services