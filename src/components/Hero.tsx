import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/banner1.png)] bg-left lg:bg[15%] bg-cover'
    style={{backgroundSize:"35%"}}
    >
<Navbar />
<div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
  <div className='hidden lg:block'></div>
  <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-green-500'>
    <div>
      <p data-aos="zoom-in-up">Hello</p>
      <p data-aos="zoom-in-up">I'm</p>
      <p data-aos="zoom-in-up">Amber</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero