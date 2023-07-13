import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center p-4'>
      <form method='POST' action="https://getform.io/f/bc82e8fa-3ae2-46fe-a523-41db781b752e" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-teal-300 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or email me on - ronnchristopher112@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message"   rows="10" placeholder='Message'></textarea>
      <button className='text-white border-2 hover:bg-teal-600  hover:border-teal-300 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact