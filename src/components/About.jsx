import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-300'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello! I'm Ronn Castañeda, and it's a pleasure to meet you. Take a moment to explore my portfolio and get to know me better.</p>
            </div>
            <div>
              <p>
              I am a dedicated and passionate BS Computer Science student from the Polytechnic University
               of the Philippines. With a keen interest in software and web development, I am constantly 
               expanding my knowledge and honing my skills in these domains. Feel free to browse through my
                work and projects to get a sense of my capabilities. 
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
