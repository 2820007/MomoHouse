import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const Card = ({image,head,para}) => {
  return (
    <section>
      <div className='bg-white w-80 space-y-4 p-10 mt-10 min-h-96'>
        <img src={image} alt="" />
        <h1 className='text-[#101828] font-bold text-2xl'>{head}</h1>
        <p className='text-[#252D43] font-light'>{para}</p>
        
    </div>
    
    
    </section>
  )
}

export default Card