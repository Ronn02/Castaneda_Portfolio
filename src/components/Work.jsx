import React from 'react';
import Work1 from '../assets/projects/work1.png'
import Work2 from '../assets/projects/work2.png'
import Work3 from '../assets/projects/work3.png'
import Work4 from '../assets/projects/work4.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 text-gray-300 border-teal-300'>Work</p>
          <p className='py-6'>// Check out some of my recent work.</p>
        </div>
{/*container*/}
      <div  
      className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/*Grid item */}
        <div style={{backgroundImage: `url(${Work4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Website (2023)
                </span>
                <div>
                  <a href="https://ragala.vercel.app/ragalahome">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>

                  <a href="https://github.com/Ronn02/RaGala2">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
                
              
            </div>
        </div>
        <div style={{backgroundImage: `url(${Work3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Simple Website (2023)
                </span>
                <div>
                  <a href="https://groupcollab.vercel.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>

                  <a href="https://github.com/Ronn02/WebDevAss2">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
                
              
            </div>
        </div>
        <div style={{backgroundImage: `url(${Work1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
                <span className='text-2xl font-bold text-white tracking-wider'>
                  HTML, CSS, JS Website(2023)
                </span>
                <div>
                  <a href="https://ronncastaneda.w3spaces.com/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>

                  
                </div>
              
            </div>
        </div>


        <div style={{backgroundImage: `url(${Work2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
                <span className='text-2xl font-bold text-white tracking-wider'>
                  HTML, CSS, JS Website (2023)
                </span>
                
              
            </div>
        </div>

        
      </div>


      </div>
      
    </div>
  )
}

export default Work