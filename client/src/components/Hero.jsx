import React from 'react'
import heroImage from '../assets/profile.jpeg'
import {TypeAnimation} from 'react-type-animation'
const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
     <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
        
            <img src={heroImage} alt="hero Image" />
        
     </div>
     <div className='col-span-2 px-5'>
     <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
        <span className='primary-color'>I'm a </span> <br/>
        <TypeAnimation sequence={[
            "Frontend Dev", 1000,
            "FullStack Dev",1000,
        ]}
        wrapper='span'
        speed={50}
        repeat={Infinity}/>

     </h1>
     <p className='text-white sm:text-lg my-6 lg:text-xl'>
        My Name is Sai Patnam and I am fresher with having skills on Fullstack Devlopment.
        </p>
        <div className='my-8'>
            <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
            Download CV</a>
            <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
            Contact</a>
        </div>
     </div>
    </div>
  )
}

export default Hero
