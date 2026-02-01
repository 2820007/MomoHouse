import React from 'react';
import about1 from "../assets/about1.png";
import First from '../components/about/first';
import chef from  "../assets/first.png"
import momo from  "../assets/second.png"
import third from "../assets/third.png"
import fourth from "../assets/fourth.png"

import Second from '../components/about/Second';
import Video from '../components/about/Video';
import Testmonial from '../components/about/Testmonial';
import Team from '../components/about/Team';



const About = () => {
  return (
    <div className='bg-white'>
      {/* first part */}
      <div className='flex flex-col lg:flex-row justify-around items-center pt-10 px-6 lg:px-20'>
        
        {/* Text Section */}
        <div className='flex flex-col gap-y-20 lg:max-w-lg'>
          {/* Allura font heading */}
          <div className='flex  flex-col gap-y-20 pl-2'>
            <h1 className='text-[#0C6967] text-5xl font-allura mb-2'>
            About Us
          </h1>

          <p className='text-sm text-[#6B788E] -mt-2'>WE PRIDE OURSELF ON</p>
          </div>

         <div>
           <p className='text-orange-700 text-4xl font-bold'>Our authentic momo recipes</p>
          <p className='text-black text-4xl font-bold'>Passed down through</p>
          <p className='text-black text-4xl font-bold'>Generations</p>
         </div>
        </div>

        {/* Image Section */}
        <div className='mt-6 lg:mt-0'>
          <img src={about1} alt="about1" className='w-114 h-157.57 object-cover rounded-lg' />
        </div>
      </div>

      {/* video section */}
      <Video/>

      <div>
      <First
        momoimg={momo}
        chefimg={chef}
      
        heading={
          <>
            Our momos are <span className="text-orange-500">made</span>
            <br />
            <span className="text-orange-500">with love</span>
          </>
        }
        para={
          <>
            Lorem ipsum dolor sit amet consectetur. Lectus <br />
            faucibus lorem ac adipiscing. Leo odio tincidunt <br />
            ipsum magna lacus viverra tincidunt. Viverra <br />
            sollicitudin eget dapibus.
          </>
        }
      />
      <Second/>
      <First
      heading={
        <>
        Our momos are the perfect <span className="text-orange-500">blend of tradition </span> and <span className="text-orange-500">innovation</span>
        </>

      }
      para={
        <>
           Lorem ipsum dolor sit amet consectetur. Lectus <br />
            faucibus lorem ac adipiscing. Leo odio tincidunt <br />
            ipsum magna lacus viverra tincidunt. 
            <br />Viverra aliquet
            sollicitudin eget dapibus.
        </>
      }
      chefimg={third}
      momoimg={fourth}
      
      />
    </div>

    <Testmonial
    
    
    />



    {/* Team Member */}

    <div className=' p-10' >
      <h2 className='text-center text-4xl font-bold mb-4'>Meet The <span className='text-orange-600'>Team</span></h2>
      <p className='text-center  text-teal-600 font-bold'>Our talented team member who delivers only best results.</p>
    </div>

       <Team/>


      
    </div>
  );
}

export default About;
