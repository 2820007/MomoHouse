import React from 'react'
import about1 from  "../assets/about1.png"


const About = () => {
  return (
    <div className='bg-white'>
      {/* first part */}
      <div className='flex justify-around items-center pt-10'>
        <div>
          <h1>
            About Us
          </h1>
          <p>WE PRIDE OURSELF ON</p>

            <p>Our authentic momo recipes</p>
            <p>Passed down through</p>
            <p>Generations</p>

        </div>
        <div>
          <img src={about1} alt="about1" className='w-114 h-157.75' />
        </div>
      </div>
    </div>
  )
}

export default About