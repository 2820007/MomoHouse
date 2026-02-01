import React from 'react'
import five from "../../assets/five.png"
import six from "../../assets/six.png"

const Second = () => {
  return (
    <section className="  w-full h-[90vh] bg-white flex  pt-20 px-28 overflow-hidden relative justify-around gap-40">
    
     <div >
      <div className="absolute bottom-20 left-150 "><img src={six} alt="" /></div>
      <div className=" "><img src={five} alt="" /></div>
     </div>

     <div className="max-w-xl  ">
        <h1 className="text-4xl font-extrabold leading-[1.1]">
            Taste the difference with our <br /> <span className="text-orange-500">our handcrafted momos</span>
         
            
         
        </h1>

        <p className="text-gray-500 mt-6 text-[15px] leading-7">
             Lorem ipsum dolor sit amet consectetur. Lectus <br />
            faucibus lorem ac adipiscing. Leo odio tincidunt <br />
            ipsum magna lacus viverra tincidunt. Viverra <br />
            sollicitudin eget dapibus.
         
        </p>
      </div>


    </section>
  )
}

export default Second