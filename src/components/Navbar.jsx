import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {

  return (
    <>
    <div className='navContainer flex justify-center mt-11'>
        <div className='navContentContainer border border-solid rounded-[50px] bg-[#EDEDED] flex flex-row justify-between items-center pl-4 pr-4 pt-2  pb-2 w-fit gap-80 '>
          <NavLink to="/portfolio"><div className='navName text-[19px] font-extrabold font-alegreya text-[#2D2626] ml-2'>Aman</div></NavLink>
          <NavLink to='/'><div className='navName text-[19px] font-alegreya mr-2 hover:text-[#3b3636] cursor-default' onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>Contact me</div></NavLink>
          </div>
    </div>
    </>
  )
}

export default Navbar