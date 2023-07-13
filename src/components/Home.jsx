import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import{Link} from 'react-scroll' ;
import Typed from 'react-typed';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/*Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-teal-300'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ronn Christopher B. Castañeda</h1>
        <Typed  className='text-4xl sm:text-6xl font-bold text-[#8892b0]'
        strings={['R-esponsible', 'C-ommitted','B-S Computer Science Student', 'C-ritical Thinker' ]} typeSpeed={100} backSpeed={60} loop/>
       
        <p className='text-[#8892b0] py-4 max-w[700px]'>I am a BS Computer Science student from the Polytechnic University of the Philippines. I have interest in software and web development and continuously strive to expand my knowledge and skills in these areas.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500} >
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-600'>
         
                 View Work
       
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>

            </span>
          </button>   </Link>
        </div>

      </div>
    </div>
  )
}

export default Home