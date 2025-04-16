import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className='w-[75%] mx-auto flex items-center justify-between mt-5 md:mb-0 mb-20'>
            <Link to="/"><img className='w-56 cursor-pointer' src="./logo-dark.png" alt="" /></Link>
            <ul className='hidden lg:flex items-start font-medium gap-10'>
                {currentUser &&
                    <Link to="/SomChat">
                        <li className='py-1'>Chatting</li>
                    </Link>
                }
                <Link to="/about">
                    <li className='py-1'>About</li>
                </Link>
                <Link to="/contact">
                    <li className='py-1'>Contact</li>
                </Link>
            </ul>
            <div className='flex item gap-4'>
                {!currentUser ?
                    <div className='flex items-center group relative gap-2 cursor-pointer'>
                        <Link to="/login" className='btn-large bg-secondary sm:flex hidden'>
                            Login <img src="./arrow_icon.svg" alt="" className='w-3' />
                        </Link>
                    </div>
                    :
                    <button className='bg-secondary text-white px-8 py-3 rounded-full font-light hidden md:flex items-center gap-3' onClick={()=>signOut(auth)}>Logout<img src="./arrow_icon.svg" alt="" className='w-3' /></button>
                }

                {/* menu icon */}
                <img onClick={() => setShowMenu(true)} className='cursor-pointer w-6 lg:hidden' src="./menu_icon.svg" alt="" />

                {/* mobile menu */}
                {showMenu && <div className={`fixed w-full lg:hidden right-0 top-0 bottom-0 bg-white overflow-hidden z-20 transition-all duration-500 py-5 px-[13%]`}>
                    <div className='mb-20'>
                        <img src="./logo-dark.png" alt="" className='cursor-pointer w-56'/>
                        {/* menu icon */}
                        <img onClick={() => setShowMenu(false)} className='cursor-pointer w-9 lg:hidden float-end -mt-16' src="./cross_icon.png" alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-4 px-5 text-md font-medium'>
                        {currentUser &&
                            <Link to="/SomChat">
                                <li className='py-1'>Chatting</li>
                            </Link>
                        }
                        <Link to="/about">
                            <li className='py-1'>About</li>
                        </Link>
                        <Link to="/contact">
                            <li className='py-1'>Contact</li>
                        </Link>
                    </ul>
                    <p className='mt-56 text-sm text-center text-gray-400'> &copy; {new Date().getFullYear()} All rights reserved by Madaale</p>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar