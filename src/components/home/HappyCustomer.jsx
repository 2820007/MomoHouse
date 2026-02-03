import React from 'react'
import girl from "../../assets/home/girl.png"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



const HappyCustomer = () => {
  return (
    <section className='flex justify-around p-10 '>
        <div className=' w-110 space-y-8 mt-20'>
            <h1 className='text-2xl  font-bold'>200+ <span className='text-orange-600'>Happy Customers</span></h1>
            <h1 className='text-teal-600 text-sm  font-bold'>What our customers say about us</h1>
            <p className='text-[#252D43] italic'>“Only the best momo you can find in the market. Different Varieties of momo to choose from. Will be  <br />
            visiting again soon”</p>
            <h1 className='text-2xl font-bold'>Livia Dias</h1>
            <div className="flex gap-x-4 mt-10">
  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shadow shadow-white">
    <FaArrowLeft />
  </button>

  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shadow shadow-white">
    <FaArrowRight />
  </button>
</div>

        </div>
        <div><img src={girl} alt="" /></div>
    </section>
  )
}

export default HappyCustomer