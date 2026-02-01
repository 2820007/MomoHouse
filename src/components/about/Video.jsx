import React from "react";
import video from "../../assets/video1.png";
import { FaPlayCircle } from "react-icons/fa";


const Video = () => {
  return (
    <div className="pt-20">
      <div className="relative w-full">
       
        <img
          src={video}
          alt=""
          className="object-cover w-full h-130"
        />

       
        <div className="absolute top-80 flex flex-col pl-20 gap-2">
          <h2 className="text-white text-3xl font-bold  ">
            Process behind the making
          </h2>
          <p className="text-white font-semibold mb-4">See how we making the momos that you like form best in gredients </p>

          <button className="bg-[#0C6967] flex items-center w-50 gap-x-1 text-white px-4 py-4 rounded-full hover:bg-teal-900 transition cursor-pointer">
            <FaPlayCircle size={20}/>
            Watch the Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
