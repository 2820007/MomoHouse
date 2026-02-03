import React from 'react'
import momo from "../../assets/services/momo.jpg"
import { NavLink } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa"

const Video = () => {
  return (
    <div className="pt-4 ">
      <div className="relative w-full">
       
        <img
          src={momo}
          alt=""
          className="object-cover w-full h-130     shadow-[6px_-6px_15px_rgba(0,0,0,0.6)]"
        />

       
        <div className="absolute top-80 flex flex-col pl-20 gap-2">
          <h2 className="text-white text-3xl font-bold  ">
            Dine With Us
          </h2>
          <p className="text-white font-semibold mb-4">Enjoy our momos in the comfort of your own home with our delivery services </p>

         <NavLink to="https://www.youtube.com/watch?v=8jHu5X_KgjY">
             <button className="bg-[#0C6967] flex items-center w-50 gap-x-1 text-white   p-4 text-center rounded-full hover:bg-teal-900 transition cursor-pointer ">
            
            Watch the Video
            <FaPlayCircle size={20}/>
            
          </button>
         </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Video