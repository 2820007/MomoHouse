import React from 'react'
import Hero from '../components/home/Hero'
import { HiOutlineArrowRight } from "react-icons/hi";

import man from "../assets/home/man.png"
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main>

      <Hero/>
      <div className='min-h-96  m-2 flex justify-around'>
        <div className=''>
          <img src={man} alt=""  />
        </div>
        <div className=' w-120 pt-40 space-y-10 '>
          <h1 className='text-2xl font-bold text-[#101828] '>Why Customers <span className='text-[#D95103]'>Love Us</span></h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellendus quidem tenetur? Recusandae dolor deserunt cumque placeat? Dignissimos similique nihil ipsa itaque qui unde mollitia architecto, labore quasi error maiores.</p>
          <NavLink to="/services">
            <div className='flex gap-x-2  items-center bg-teal-600 rounded-4xl  px-4 py-4 w-70 text-center text-white cursor-pointer hover:bg-teal-900'>
            <button >Explore Our Story
           
          </button>
           <HiOutlineArrowRight/>
          </div>
          </NavLink>
        </div>
      </div>


    </main>
  )
}

export default Home