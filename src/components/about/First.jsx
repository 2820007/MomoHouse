import React from "react";


const First = ({chefimg,momoimg, heading,para}) => {
  return (
    <section className="  w-full h-[90vh] bg-white flex  pt-20 px-28 overflow-hidden relative justify-around">
      
      {/* LEFT TEXT */}
      <div className="max-w-xl ">
        <h1 className="text-4xl font-extrabold leading-[1.1]">
          {heading}
        </h1>

        <p className="text-gray-500 mt-6 text-[15px] leading-7">
         {para}
        </p>
      </div>

      {/* RIGHT IMAGE WRAPPER */}
     <div >
      <div className="absolute bottom-20 left-150 "><img src={momoimg} alt="" /></div>
      <div className=" "><img src={chefimg} alt="" /></div>
     </div>


    </section>
  );
};

export default First;
