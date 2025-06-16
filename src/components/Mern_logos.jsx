import React from 'react'
import mongo from '../portfolio_items/mongo.png'
import node from '../portfolio_items/node.png'
import react from '../portfolio_items/react.png'
import js from '../portfolio_items/js.png'
const Mern_logos = () => {
  return (
   <>
    <div className='mernLogosLine flex justify-center  font-alegreya text-[20px] text-[#726F6F] mt-16 '>Interested in MERN technology stack.</div>
    <div className="logos flex justify-center items-center gap-6 mt-5">
  <img src={react} alt="React" className="w-auto h-16" />
  <img src={node} alt="Node.js" className="w-auto h-16" />
  <img src={mongo} alt="MongoDB" className="w-auto h-16" />
  <img src={js} alt="JavaScript" className="w-auto h-16" />
</div>

   </>
  )
}

export default Mern_logos