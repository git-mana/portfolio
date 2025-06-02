import React from 'react'
import '../App.css'
import linkedin from '../portfolio_items/linkedin.png'
import github from '../portfolio_items/github.png'
import indeed from '../portfolio_items/indeed.png'
import YT from '../portfolio_items/YT.png'
import whatsapp from '../portfolio_items/whatsapp.png'
import email from '../portfolio_items/email.png'
const Contact = () => {
  return (
   <div id="contact">

   <div className='contactLabelContainer flex flex-col justify-center items-center mt-16'> 
      <div className='contactContainer text-[50px] font-extrabold font-alegreya text-[#2C2828]'>Contact Me</div>
     </div>
    <div className='contacat_line flex justify-center  font-alegreya text-[20px] text-[#726F6F] '>I am here to help.</div>
        <div className="contactLogos flex justify-between">
           <div className="Logo clockwise delay-0 w-20 relative " style={{ left: '8vw', top: '13vh' }}>  <img src={indeed} alt="Node.js" className="w-auto h-auto" /> </div>        
            <div className="Logo anticlockwise delay-1 w-16 relative " style={{ bottom: '2vh', right: '23vw' }}>  <a href="https://www.linkedin.com/in/muhammad-aman-arshad-456888308/"  target="_blank" ><img src={linkedin} alt="React" className="w-auto h-auto" /></a></div>
        </div>

    <div className="contactDetails flex justify-center h-fit gap-20 m-1">
        <div className="whatsapp h-fit  flex flex-col justify-center items-center">
            <div className="whatsappLogo h-20 relative top-7">
               <img className='h-full' src={whatsapp} alt="" />
            </div>
            <div className="whatsappInfo flex-col  h-[236px] w-[451px] bg-[#E5E3E3] flex items-center justify-center">
                    <span className='contactText text-[24px] text-[#353030] font-alegreya'>Contact Me</span>
                    <span className='contactText text-[24px] text-[#353030] font-alegreya'>0316 5774658</span>
            </div>
        </div>
        <div className="email h-fit  flex flex-col justify-center items-center">
            <div className="emailLogo h-20 relative top-7">
                <img className='h-full' src={email} alt="" />
            </div>
            <div className="emailInfo">
               <div className="emailInfo flex flex-col h-[236px] w-[451px] bg-[#E5E3E3]  items-center justify-center">
                    <span className='contactText text-[24px] text-[#353030] font-alegreya'>Ask a question</span>
                    <span className='contactText text-[24px] text-[#353030] font-alegreya'>amanarshad528@gmail.com</span>
               </div>
            </div>
        </div>

    </div>

    <div className='contactLastLine flex justify-center  font-alegreya text-[20px] text-[#726F6F] m-16 '>Looking for a professional web solution? Let’s build something amazing together!</div>

    <div className="contactLogos  flex justify-between">
            <div className="Logo clockwise delay-1 w-20 relative " style={{ left: '26vw', bottom: '4vh' }}>  <img src={YT} alt="Node.js" className="w-auto h-auto" /> </div>        
            <div className="Logo anticlockwise delay-0 w-20 relative " style={{ bottom: '18vh', right: '12vw' }}> <a href="https://github.com/git-mana"  target="_blank" ><img src={github} alt="React" className="w-auto h-auto"  /></a></div>
        </div>
   </div>
  )
}

export default Contact