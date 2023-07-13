import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex  justify-center lg:flex-row  p-4'>
      
      <form method='POST' action="https://getform.io/f/bc82e8fa-3ae2-46fe-a523-41db781b752e" className='flex flex-col max-w-[600px] w-full'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-teal-300 text-gray-300'>Contact</p>
        
          <p className='text-gray-300 py-4'>// Submit the form below or email me on - ronnchristopher112@gmail.com</p>
        </div>
        
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message"   rows="10" placeholder='Message'></textarea>
      <button className='text-white border-2 hover:bg-teal-600  hover:border-teal-300 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        {/*Social Icons */}
        <div className='lg:hidden flex justify-center'>
                <ul className='flex flex-row justify-center items-center mt-[30px] mb-[30px]'>
                    <li className='w-[60px] h-[60px] flex justify-items-center bg-blue-600 '>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/ronn-casta%C3%B1eda-821531243/">
                         <FaLinkedin size={30}/>
                    </a>
                    </li>

                    <li className='w-[60px] h-[60px] flex justify-items-center bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/Ronn02">
                        <FaGithub size={30}/>
                    </a>
                    </li>

                    <li className='w-[60px] h-[60px] flex justify-items-center bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:ronnchristopher112@gmail.com">
                        <HiOutlineMail size={30}/>
                    </a>
                    </li>

                    <li className='w-[60px] h-[60px] flex justify-items-center bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://drive.google.com/drive/folders/1cbz1-iS0m60z_V2HysN0UVEWOZbWldsw?usp=sharing">
                         <BsFillPersonLinesFill size={30}/>
                    </a>
                    </li>
                    <li className='w-[60px] h-[60px] flex justify-items-center bg-blue-600 '>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.facebook.com/ronn.castaneda">
                       <FaFacebook size={30}/>
                    </a>
                    </li>
                </ul>
            </div>
      </form>
      
      
      
    </div>
    
  )
}

export default Contact