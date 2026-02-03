import React from 'react'
import chef from "../../assets/home/chef.png"
import { NavLink } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";

const Video = () => {
  return (
    <div className='py-10 '>
        <h1 className='text-center mb-16 text-4xl font-bold text-[#101828]'><span className='text-[#D95103]'>We Offer People </span>The Service They Want</h1>
         <div className="relative w-full">
       
        <img
          src={chef}
          alt=""
          className="object-cover w-full h-140 shadow shadow-black"
        />

       
        <div className="absolute inset-55   left-100  pl-20 gap-2">
          <h2 className="text-gray-300 text-3xl font-bold  ">
            Process behind the making
          </h2>
          <p className="text-white font-semibold mb-4">See how we making the momos that you like form best in gredients </p>

          
          <NavLink to="https://www.youtube.com/watch?v=8jHu5X_KgjY" className="">
          <button className="bg-[#0C6967] flex items-center w-50 gap-x-1 text-white  px-4 py-4 rounded-full hover:bg-teal-900 transition cursor-pointer">
            
            Watch the Video
            <FaPlayCircle size={20}/>
          </button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Video