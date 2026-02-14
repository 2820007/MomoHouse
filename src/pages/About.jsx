import React from 'react';
import about1 from "../assets/about1.png";
import First from '../components/about/First';
import chef from  "../assets/first.png"
import momo from  "../assets/second.png"
import third from "../assets/third.png"
import fourth from "../assets/fourth.png"

import Second from '../components/about/Second';
import Video from '../components/about/Video';
import Testmonial from '../components/about/Testmonial';
import Team from '../components/about/Team';
import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"



const About = () => {
  return (
    <div className='bg-white overflow-hidden'>

      {/* First Part */}
      <div className='flex flex-col lg:flex-row justify-around items-center pt-10 px-6 sm:px-10 lg:px-20 gap-10'>

        {/* Text Section */}
        <div className='flex flex-col gap-y-10 lg:gap-y-16 lg:max-w-lg text-center lg:text-left'>

          <div className='flex flex-col gap-y-6'>
            <h1 className='text-[#0C6967] text-4xl sm:text-5xl font-allura'>
              About Us
            </h1>

            <p className='text-xs sm:text-sm text-[#6B788E]'>
              WE PRIDE OURSELF ON
            </p>
          </div>

          <div className='space-y-2'>
            <p className='text-orange-700 text-2xl sm:text-3xl lg:text-4xl font-bold'>
              Our authentic momo recipes
            </p>
            <p className='text-black text-2xl sm:text-3xl lg:text-4xl font-bold'>
              Passed down through
            </p>
            <p className='text-black text-2xl sm:text-3xl lg:text-4xl font-bold'>
              Generations
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full flex justify-center'>
          <img
            src={about1}
            alt="about1"
            className='w-full max-w-md lg:max-w-lg h-auto object-cover rounded-lg'
          />
        </div>
      </div>

      {/* Video Section */}
      <Video />

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

        <Second />

        <First
          heading={
            <>
              Our momos are the perfect{" "}
              <span className="text-orange-500">blend of tradition </span>
              and <span className="text-orange-500">innovation</span>
            </>
          }
          para={
            <>
              Lorem ipsum dolor sit amet consectetur. Lectus <br />
              faucibus lorem ac adipiscing. Leo odio tincidunt <br />
              ipsum magna lacus viverra tincidunt.
              <br />
              Viverra aliquet sollicitudin eget dapibus.
            </>
          }
          chefimg={third}
          momoimg={fourth}
        />
      </div>

      <Testmonial />

      {/* Team Section */}
      <div className='p-6 sm:p-10 text-center'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
          Meet The <span className='text-orange-600'>Team</span>
        </h2>
        <p className='text-sm sm:text-base text-teal-600 font-bold'>
          Our talented team member who delivers only best results.
        </p>
      </div>

      {/* Team Cards */}
      <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-6 p-6 sm:p-10'>
        <Team
          team={team1}
          head={<>Head Chef</>}
        />
        <Team
          team={team2}
          head={<>Assistant Chef</>}
        />
        <Team
          team={team3}
          head={<>Assistant Chef</>}
        />
      </div>

    </div>
  );
}


export default About;
