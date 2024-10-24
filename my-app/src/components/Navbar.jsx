import React from 'react'

function Navbar() {
    return (
        <>
            <div className='flex justify-center '>
                <div className='w-[1200px] mb-5'>
                    <nav className='w-auto py-5 flex justify-between items-center'>
                        <div className='flex'>
                            {/* <img src="/logo.svg" className='' alt="" /> */}
                            <h1 className='font-bold text-3xl tracking-wide text-violet-950'>CarePoint</h1>
                        </div>
                        <div className=''>
                            <ul className='flex gap-6 uppercase text-sm font-medium items-center'>
                                <a className='cursor-pointer py-1 tracking-wide'>Home</a>
                                <a className='cursor-pointer py-1 tracking-wide'>all doctors</a>
                                <a className='cursor-pointer py-1 tracking-wide'>about</a>
                                <a className='cursor-pointer py-1 tracking-wide'>contact</a>
                                <a href="#" className='text-xs border rounded-full text-center capitalize py-1 px-5 border-gray-300'>Admin Panel</a>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className='py-3 px-8 bg-[#5f6fff] text-white text-sm rounded-full'>Create account</a>
                        </div>
                    </nav>
                    <hr className='border-1 border-gray-400' />
                </div>
            </div>

        </>
    )
}

export default Navbar