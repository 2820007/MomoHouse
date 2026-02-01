import React from 'react'
import first from "../assets/allergy/first.png"

const Allergy = () => {
  return (
    <div className='bg-white'>
      {/* first part */}
      <div className='flex flex-col lg:flex-row justify-around items-center p-10 px-6 lg:px-20'>
        
        
        <div className='flex flex-col gap-y-20 lg:max-w-lg'>
         
          <div className='flex  flex-col pl-2'>
            <h1 className='text-[#0C6967] text-5xl font-allura mb-8'>
            Allergy Advices
          </h1>

          <p className='text-sm text-[#6B788E] mb-2'>AT OUR RESTURANT</p>
          </div>

         <div>
           <p className='text-4xl font-bold'>We use only freshet and highest  <br />
           quality ingredients in all our dishes, <br />
           <span className='text-orange-600 font-bold'>and offer transparency our ingredient
         </span><br />


           </p>
         </div>
        </div>

        {/* Image Section */}
        <div className='mt-6  bg-teal-700 rounded-full w-100 h-100 flex items-center justify-center '>
          <img src={first} alt="about1" className='w-114 h-157.57 object-cover rounded-lg ' />
        </div>
      </div>
      {/* Ingredient Used */}
      <div>
       <div className="flex items-center justify-center gap-4 my-10">
      <span className="h-0.5 w-24 bg-teal-400"></span>

      <h2 className="text-orange-500 text-xl font-bold">
        Ingredient&apos;s Used
      </h2>

      <span className="h-0.5 w-24 bg-teal-400"></span>
        </div>



        
      </div>

    </div>
  )
}

export default Allergy
