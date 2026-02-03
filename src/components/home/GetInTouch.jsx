import React from 'react'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const GetInTouch = () => {
  return (
    <section className=' '>
        <div className='mb-10'>
            <h1 className='text-4xl text-center'>Get <span className='text-orange-600 font-bold'>In Touch</span></h1>
            <p className='font-bold text-teal-600 text-center text-2xl'>Our Friendly team would love to hear from you</p>
        </div>

        
        <div className='flex justify-around  p-10'>
            <div className="w-full max-w-sm rounded-xl bg-[#0F6A66] p-8 text-white">
      
      {/* Address */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2 font-semibold">
          <FaMapMarkerAlt />
          <span>Our Address</span>
        </div>
        <p className="italic leading-relaxed text-white/90">
          New Baneshwor, Kathmandu, Bagmati, <br /> Nepal
        </p>
      </div>

      {/* Contacts */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2 font-semibold">
          <FaPhoneAlt />
          <span>Our Contacts</span>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-medium">Mobile</p>
            <p className="mt-1">980 5689789</p>
            <p>9841 275897</p>
          </div>

          <div>
            <p className="font-medium">Landline</p>
            <p className="mt-1">01-4783972</p>
          </div>
        </div>
      </div>

      {/* Service Time */}
      <div className="mb-12">
        <div className="mb-3 flex items-center gap-2 font-semibold">
          <FaClock />
          <span>Our Service Time</span>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold">MON - FRI</p>
            <p className="mt-1 italic">10 am - 8 pm</p>
          </div>

          <div>
            <p className="font-semibold">SAT - SUN</p>
            <p className="mt-1 italic">Closed</p>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className=''>
        <p className="mb-4 italic">Get in touch in social networks</p>
        <div className="flex gap-4">
         <NavLink to="https://www.facebook.com/" target="_blank">
             <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0F6A66]">
            <FaFacebookF />
          </span>
         </NavLink>
         <NavLink to="https://www.instagram.com/" target="_blank">
             <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0F6A66]">
            <FaInstagram />
          </span>
         </NavLink>
         <NavLink to="https://www.tiktok.com/en/" target="_blank">
             <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0F6A66]">
            <FaTiktok />
          </span>
         </NavLink>
        </div>
      </div>

    </div>


 

        <div className='shadow-2xl p-4'>

            <form className="mt-8 space-y-6">
        
        {/* Name */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Select */}
        <div>
          <label htmlFor="choice" className="block text-sm font-medium text-gray-700">
            What can we do for you?
          </label>
          <select
            id="choice"
            className="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="">Choose an option</option>
            <option value="momo">Momo</option>
            <option value="vegMomo">Veg Momo</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here..."
            className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-full bg-orange-600 px-8 py-3 font-semibold text-white transition cursor-pointer hover:bg-teal-700"
        >
          Send Message
        </button>
      </form>
        </div>
        </div>
    </section>
  )
}

export default GetInTouch