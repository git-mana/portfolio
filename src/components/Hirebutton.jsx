import React from 'react'
import MailIcon from '../assets/mail.svg';
import { NavLink } from 'react-router-dom';
import ProjectIcon from '../assets/project.svg';
const hireButton = () => {
  return (
    <>
     <div className="hireButton flex justify-center m-8 gap-4">
           <button className="hire_Button border border-solid rounded-[13px] bg-[#2C2828] flex flex-row items-center pl-6 pr-6 pt-2 pb-2 gap-3 hover:bg-[#3b3636]" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
           <img src={MailIcon} alt="Mail Icon" className="w-5 h-5" />
           <span className="text-white font-semibold">Hire Me</span>
           </button>
           <NavLink to="/portfolio"><button className="hire_Button border border-solid rounded-[13px] bg-[#2C2828] flex flex-row items-center pl-6 pr-6 pt-2 pb-2 gap-3 hover:bg-[#3b3636]" >
           <img src={ProjectIcon} alt="Mail Icon" className="w-5 h-5" />
           <span className="text-white font-semibold">Projects</span>
           </button></NavLink>
        </div>
</>
  )
}

export default hireButton