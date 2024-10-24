import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowRoundForward } from "react-icons/io";
function Home() {
    const speciality = [
        {
            img: '/download1.svg',
            title: 'General physician',
            imgAlt: 'General physician',
        },
        {
            img: '/download2.svg',
            title: 'Gynecologist',
            imgAlt: 'Gynecologist',
        },
        {
            img: '/download3.svg',
            title: 'Dermatologist',
            imgAlt: 'Dermatologist',
        },
        {
            img: '/download4.svg',
            title: 'Pediatricians',
            imgAlt: 'Pediatricians',
        },
        {
            img: '/download5.svg',
            title: 'Neurologist',
            imgAlt: 'Neurologist',
        },
        {
            img: '/download6.svg',
            title: 'Gastroenterologist',
            imgAlt: 'Gastroenterologist',
        },
    ]

    const doc = [
        {
            img: '/doctors/doc1.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
        {
            img: '/doctors/doc2.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
        {
            img: '/doctors/doc3.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
        {
            img: '/doctors/doc4.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
        {
            img: '/doctors/doc5.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
        {
            img: '/doctors/doc6.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
        {
            img: '/doctors/doc7.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
        {
            img: '/doctors/doc8.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
        {
            img: '/doctors/doc9.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
        {
            img: '/doctors/doc10.png',
            title1: 'Dr. Richard James',
            title2: 'General physician',
            imgAlt: 'Dr. Richard James',
        },
    ]

    return (
        <>
            <Navbar />
            <div className='flex justify-center '>
                <div className='w-[1200px]'>
                    <div className='flex flex-col'>
                        {/* #1 */}
                        <div className='w-full bg-[#5f6fff] rounded-lg grid grid-cols-2 px-10 relative'>

                            <div className='flex flex-col justify-center pt-[10vw] pb-[6vw] px-7'>
                                <h1 className=' text-5xl font-bold text-white my-4'>Book Appointment With Trusted Doctors</h1>
                                <div className='flex gap-4 text-sm text-white justify-center my-2'>
                                    <img src="/group_profiles.png" alt="group_profiles" className='w-28' />
                                    <p>Simply browse through our extensive list of trusted doctors,
                                        schedule your appointment hassle-free.</p>
                                </div>
                                <a href="" className='text-sm flex gap-1 items-center justify-center bg-white text-gray-600 rounded-full w-48 py-3 px-4 my-4 hover:scale-105 duration-300'>Book appointment <IoIosArrowRoundForward className='text-xl font-extrabold' /></a>
                            </div>
                            <div>
                                <img src="/header_img.png" alt="" className='absolute bottom-0 w-[580px] px-10' />
                            </div>
                        </div>

                        {/* #2 */}
                        <div className='flex flex-col justify-center items-center py-16'>
                            <h1 className='text-3xl font-semibold '>Find by Speciality</h1>
                            <p className='w-1/3 text-center text-sm my-6'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                            <div className='flex gap-4'>
                                {speciality.map((items, index) => (
                                    <a key={index} className='flex flex-col items-center justify-center cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                                        <img src={items.img} alt={items.imgAlt} className='w-24' />
                                        <p className='text-xs'>{items.title}</p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* #3 */}
                        <div className='flex flex-col justify-center items-center py-16'>
                            <h1 className='text-3xl font-semibold '>Top Doctors to Book</h1>
                            <p className='w-1/3 text-center text-sm my-6'>Simply browse through our extensive list of trusted doctors.</p>
                            {/* card div */}
                            <div className='grid grid-cols-5 gap-6'>
                                {/* Cards */}
                                {doc.map((items, index) => (
                                    <div key={index} className='rounded-lg border border-[#C9D8FF] hover:translate-y-[-10px] transition-all duration-500 cursor-pointer'>
                                        <div className='bg-[#EAEFFF] rounded-t-lg'>
                                            <img src={items.img} alt={items.imgAlt} />
                                        </div>
                                        <div className='p-4  '>
                                            <div className='flex items-center gap-2 font-semibold  text-sm'>
                                                <p className='w-2 h-2 rounded-full bg-green-500'></p>
                                                <p className='text-green-500'>Available</p>
                                            </div>
                                            <p className='text-lg font-semibold'>{items.title1}</p>
                                            <p className='text-sm text-gray-600'>{items.title2}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home