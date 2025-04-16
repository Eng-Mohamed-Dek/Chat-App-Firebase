import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => { 
  return (
    <section id='footer' class="footer bg-black scroll-m-24 mt-56">
    <div class="container-footer">
      <div class="footer-grid">
        <div className='cursor-pointer'>
            <img src="./logo-white.png" alt="logo"className='md:ml-0 ml-14'/>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-tiktok"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-whatsapp"></i>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li> <Link to="/about">About Us</Link></li>
            <li> <Link to="/contact">Contacts</Link></li>
            <li><a href="#pricing">Join Our Mentorship</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Downloadable PDF</a></li>
            <li><a href="#">Quick Searches</a></li>
            <li><a href="#">Analysis Tools</a></li>
          </ul>
        </div>
        <div className='hidden md:block'>
          <h4>Contact Us</h4>
            <form action="" className=' flex-col md:flex'>
              <input type="text" placeholder='Enter Your Message' className='px-5 py-3 w-[300px] rounded-md text-slate-600 outline-none'/>
              <button className='px-5 py-3 rounded-md f bg-primary text-white cursor-pointer w-[300px] mt-5'>Send Message</button>
            </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer