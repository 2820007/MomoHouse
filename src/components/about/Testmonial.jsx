import React from "react";
import ceo from "../../assets/ceo.png";
import test from "../../assets/test.png";

const Testimonial = () => {
  return (
    <div className="  w-full flex ">
      
      {/* LEFT IMAGE WITH OVERLAY */}
      <div className="w-2/3 relative">
        <img src={test} alt="" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute  top-30 left-40 flex flex-col justify-center px-16 text-white">
          <span className="text-6xl mb-6">“</span>

          <p className="max-w-lg leading-7 mb-6">
            Momo is not just about sustenance, it's about bringing people together
            and creating memories. At our restaurant, we strive to create a warm
            and inviting atmosphere where our guests can enjoy delicious momo,
            great company, and unforgettable experiences.
          </p>

          <h1 className="text-xl font-bold">Marcus Schleifer</h1>
          <p className="opacity-80">CEO</p>
        </div>
        <div className="absolute bottom-10 right-40 flex gap-4">
          <button className="w-10 h-10 border border-white/40  cursor-pointer   text-white rounded-full flex items-center justify-center">
            ←
          </button>
          <button className="w-10 h-10 border border-white/40 cursor-pointer text-white rounded-full flex items-center justify-center">
            →
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/3">
        <img
          src={ceo}
          alt="CEO"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default Testimonial;
