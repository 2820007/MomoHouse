import React from 'react'
import Hero from '../components/service/Hero'
import Video from '../components/service/Video'
import Card from '../components/service/Card'
import Card1 from '../components/service/Card1'
import GetInTouch from '../components/service/GetInTouch'

const Services = () => {
  return (
    <section className='bg-white min-h-screen'>
      <Hero/>
      <Video/>
      <Card/>
      <Card1/>
      <GetInTouch/>
      
    </section>
  )
}

export default Services