import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Home/Navbar'

const About = () => {
    return (
        <>
        <Navbar /> 
        <div className='md:w-2/4 mx-auto px-10 py-5'>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-12'>
                <div className='flex flex-col justify-center gap-6 text-gray-600'>
                    <p> Welcome to our Chat App – a platform designed specifically for Somali youth developers to connect, collaborate, and grow together in the world of technology. Our mission is to create a vibrant community where young developers from Somalia can share ideas, exchange knowledge, and support each other in their coding journeys. We believe that by connecting young minds, we can inspire creativity and drive innovation in the Somali tech ecosystem. </p>
                    <p> We are committed to empowering Somali youth by providing them with the tools and resources they need to succeed in the tech industry. Our vision is to bridge the gap in access to knowledge and opportunities, encouraging young developers to share their talents and take part in global technology conversations. Join us today and be part of a dynamic and supportive community that's shaping the future of tech in Somalia!.</p>
                    <b className='text-3xl text-slate-500'>Our Vision</b>
                    <p>Our vision is to foster a thriving community of Somali youth developers who are equipped with the knowledge, skills, and networks to succeed in the global tech industry. We aspire to create a platform where young developers can find inspiration, collaborate on meaningful projects, and learn from one another. By providing access to a network of like-minded individuals, we aim to help unlock the potential of Somali youth and create a ripple effect that leads to long-term growth in the tech sector.</p>

                     <p>Our goal is to be the trusted companion in every user's journey toward success.</p>
                </div>
            </div>
            <button className='border border-primary px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer rounded-full'>
                <Link to="/">Go Back to Home</Link>
            </button>
        </div>
        </>
    )
}

export default About