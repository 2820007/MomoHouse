import React from 'react'
import { NavLink } from 'react-router-dom'

const GetInTouch = () => {
  return (
<section className='bg-gray-200 m-18 h-80 rounded-2xl flex justify-center items-center flex-col gap-y-4'>
    <h1 className='text-2xl text-[#101828] font-bold'>Got any Queries?</h1>
    <p className='text-[#6B788E] font-light'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
    <NavLink to="/contact">
            <button className='text-white bg-teal-600 rounded-3xl px-8 py-3 text-center  cursor-pointer'>Get In Touch</button>
    </NavLink>

</section>
  )
}

export default GetInTouch   