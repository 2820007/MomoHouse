import React from "react";
import momologo from "../../assets/momologo.png";
import { NavLink } from "react-router-dom";

import { IoLogoFacebook } from "react-icons/io5";
import { FaTiktok, FaSquareInstagram, FaYoutube } from "react-icons/fa6";
import { CiTwitter, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600">
      
      <div className="container mx-auto px-6 lg:px-16 pt-14">

       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

         
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={momologo} alt="logo" className="w-8 h-8" />
              <h1 className="text-xl font-semibold text-teal-600">momos</h1>
            </div>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
              molestie. Volutpat quis egestas porttitor turpis sit.
            </p>
          </div>

          {/* MOMOS LINKS */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-semibold text-gray-800 mb-4">momos</h2>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/menu">Our Menu</NavLink></li>
              <li><NavLink to="services">Our Services</NavLink></li>
              <li><NavLink to="contact">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* LEGALS */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-semibold text-gray-800 mb-4">Legals</h2>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li><NavLink>Terms & Conditions</NavLink></li>
              <li><NavLink>Privacy Policy</NavLink></li>
              <li><NavLink>Support</NavLink></li>
            </ul>
          </div> 

          {/* FOLLOW US */}
          <div className="flex flex-col items-center">
            <h2 className="font-semibold text-gray-800 mb-4">Follow Us</h2>

           
            <div className="flex justify-center gap-4 mb-4">
              <NavLink to="https://www.facebook.com/" target="_blank">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white">
                  <IoLogoFacebook size={35} />
                </div>
              </NavLink>

              <NavLink to="https://www.linkedin.com/" target="_blank">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white">
                  <CiLinkedin  size={35}/>
                </div>
              </NavLink>

              <NavLink to="https://twitter.com/" target="_blank">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white">
                  <CiTwitter size={35} />
                </div>
              </NavLink>
            </div>

         
            <div className="flex justify-center gap-4">
              <NavLink to="https://www.youtube.com/" target="_blank">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white">
                  <FaYoutube size={35} />
                </div>
              </NavLink>

              <NavLink to="https://www.instagram.com/" target="_blank">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white">
                  <FaSquareInstagram size={35} />
                </div>
              </NavLink>

              <NavLink to="https://www.tiktok.com/" target="_blank">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white">
                  <FaTiktok size={35} />
                </div>
              </NavLink>
            </div>
          </div>

        </div>

       
        <hr className="border-gray-200" />

     
        <p className="text-center text-sm py-6">
          Copyright ©2026 Ravi DigitalFoods Pvt Ltd. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
