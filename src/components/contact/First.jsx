import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const First = () => {
  return (
    <section className=" min-h-96  flex flex-col justify-center items-center pt-10">
      <div className="mb-20 space-y-4 text-center ">
        <h1 className="text-teal-600 text-3xl font-bold ">Our Contact</h1>
        <h1 className="text-[#6B788E] font-light ">GET IN TOUCH</h1>
        <p className="text-2xl font-bold">
          <span className="text-[#D95103]">Our Friendly Team</span> would love
          to hear from you
        </p>
      </div>
      <div className=" w-220 flex justify-around p-6">
        <div className=" w-55 h-40 shadow-2xl bg-white shadow-gray-400 italic text-center p-4">
          <h1 className="flex justify-center items-center gap-2 font-bold  mb-8">
            <FaLocationDot color="orange" />
            LOCATION
          </h1>
          <p className="text-[#252D43]">
            New Baneshwor -41201, <br /> Kathmandu, Bagmati, Nepal
          </p>
        </div>
        <div className=" w-55 h-40 shadow-2xl bg-white shadow-gray-400 italic text-center p-4">
          <h1 className="flex justify-center items-center gap-2 font-bold mb-4">
            <FaPhoneVolume color="orange" />
            PHONE
          </h1>
           <p className="mb-4"><span className="text-teal-600">Mobile:</span>+979704374211 <br /> +979763345750</p>
                  <p><span className="text-teal-600">Tel:</span> 053546789</p>
        </div>
        <div className=" w-55 h-40 shadow-2xl bg-white shadow-gray-400 italic text-center p-4">
          <h1 className="flex justify-center items-center gap-2 font-bold mb-4">
            <FaClock  color="orange"/>
            SERVICE TIME
          </h1>
          <p  className="mb-4"><span className="text-teal-600">MON - FRI</span> {"  "} 8am -8pm</p>
           <p ><span className="text-teal-600">SAT - SUN</span> {"  "} Closed</p>
         
        </div>
      </div>
    </section>
  );
};

export default First;
