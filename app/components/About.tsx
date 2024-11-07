import React from 'react'
import Image from 'next/image'
import AboutPic from '../../public/img/about.png'
import Link from 'next/link'

const About = () => {
  return (
    <div className='text-[#597C61] mt-[50px] flex flex-col-reverse px-[15px] md:flex-row md:justify-center md:items-center md:pl-[80px]'>
        <Image src={AboutPic} alt="About us pic" className='w-50% md:w-[50%]' />
        <div className='md:w-[50%] md:h-[100%] md:ml-[50px]'>
            <h2 className='text-[34px] font-poppins-bold mb-[15px] md:mb-[20px]'>About Us</h2>
            <p className='text-[18px] font-poppins-regular mb-[15px] md:mb-[20px] md:w-[90%]'>We are committed to taking urgent action against climate change. Our mission is to educate, empower, and inspire individuals and communities to adopt sustainable practices and advocate for stronger environmental policies. We believe that every action, no matter how small, contributes to the fight against climate change</p>
            <Link href="" className='block mb-[25px]'>
            <button className='font-poppins-bold border-2 border-[#597C61] p-2 px-4'> Learn More</button>
            </Link>
        </div>
    </div>
  )
}

export default About