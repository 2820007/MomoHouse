import React from 'react'
import vector from "../../assets/services/vector.png"
import table from "../../assets/services/table.png"
import qr from "../../assets/services/qr.png"

const Card1 = () => {
  return (
     <section className='flex  justify-around min-h-90 p-20 bg-white '>
           
            <div><img src={table} alt="" className='rounded-2xl' /></div>
             <div className=' w-120 space-y-6'>
                <div  className='space-y-4'>
                <img src={vector} alt="" />
                <h1 className='font-bold  text-2xl'>Categring</h1>
                <p className='font-semibold text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet praesentium libero ab illo. Debitis ab harum aspernatur, fuga eveniet tempore quos cum facere. Fugit voluptatibus libero ea rem omnis?</p>
                </div>
                <div className='flex justify-around  items-center'>
                  <div>  <h2 className='font-bold text-teal-800 text-2xl'>Scan the QR code</h2>
                    <p className='text-gray-400'>You can also check about the service</p></div>
               
                <div><img src={qr} alt="" /></div>
                 </div>
            </div>
        </section>

  )
}

export default Card1