import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Home/Navbar'

const Contact = () => {
  return (
    <>  
      <Navbar />
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-800 font-bold'>US</span></p>
      </div>
      <div className='px-10 py-5 flex flex-col md:flex-row justify-center items-center gap-44'>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-12'>
          <div className='flex flex-col justify-center items-start gap-6 leading-6'>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>1027 Jaalle Siyaad <br /> WX_Xalane, Wadajir, Mogadisho</p>
            <p className='text-gray-500'>Tel: +(252) 61445916 <br /> Email: mohameddek366@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>Enjoy at SomChat</p>
            <button className='border border-primary px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer rounded-full'>
              <Link to="/">Go Back to Home</Link>
            </button>
          </div>
        </div>
        <div className='mb-20 md:mb-0'>
          <p className='block md:hidden font-semibold text-lg text-gray-600 py-3'>Send A Message</p>
          <form action="" className='w-[350px]'>
            <div className='mt-5'>
              <label htmlFor="" className='text-slate-500'>Name</label>
              <input type="text" placeholder='Enter Your Name' className='border-[2px] px-5 py-2 w-full outline-none' />
            </div>
            <div className='mt-5'>
              <label htmlFor="" className='text-slate-500'>Email</label>
              <input type="email" placeholder='Enter Your Email' className='border-[2px] px-5 py-2 w-full outline-none' />
            </div>
            <div className='mt-5'>
              <label htmlFor="" className='text-slate-500'>Message</label>
              <textarea name="" rows={4} placeholder='Enter Your Message' className='resize-none border-[2px] px-5 py-3 w-full outline-none'></textarea>
            </div>
            <button className='border bg-slate-500 text-white px-8 py-3 text-sm transition-all duration-500 cursor-pointer'>Send Message</button>
          </form>
        </div>
      </div >
    </>
  )
}

export default Contact