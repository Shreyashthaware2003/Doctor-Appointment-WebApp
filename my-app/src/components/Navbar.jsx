import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='flex justify-center '>
                <div className='w-[1200px] mb-5'>
                    <nav className='w-auto py-5 flex justify-between items-center'>
                        <div className='flex'>
                            {/* <img src="/logo.svg" className='' alt="" /> */}
                            <h1 className='font-bold text-3xl tracking-wide text-violet-950'>CarePoint</h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className='hidden md:flex'>
                            <ul className='flex gap-6 uppercase text-sm font-medium items-center'>
                                <a className='cursor-pointer py-1 tracking-wide'>Home</a>
                                <a className='cursor-pointer py-1 tracking-wide'>All Doctors</a>
                                <a className='cursor-pointer py-1 tracking-wide'>About</a>
                                <a className='cursor-pointer py-1 tracking-wide'>Contact</a>
                                <a href="#" className='text-xs border rounded-full text-center capitalize py-1 px-5 border-gray-300'>Admin Panel</a>
                            </ul>
                        </div>

                        <div className='hidden md:flex'>
                            <a href="#" className='py-3 px-8 bg-[#5f6fff] text-white text-sm rounded-full'>Create Account</a>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <div className='md:hidden'>
                            <button onClick={toggleMenu}>
                                <HiMenuAlt3 className='text-3xl text-violet-950' />
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className='flex flex-col gap-4 uppercase text-sm font-medium items-center'>
                            <a className='cursor-pointer py-1 tracking-wide'>Home</a>
                            <a className='cursor-pointer py-1 tracking-wide'>All Doctors</a>
                            <a className='cursor-pointer py-1 tracking-wide'>About</a>
                            <a className='cursor-pointer py-1 tracking-wide'>Contact</a>
                        </ul>
                    </div>

                    <hr className='border-1 border-gray-400' />
                </div>
            </div>
        </>
    );
}

export default Navbar;
