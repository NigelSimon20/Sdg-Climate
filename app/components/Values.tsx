import React from 'react'
import Image from 'next/image'
import ValuesPic from '../../public/img/core.png'
import Link from 'next/link'

const Values = () => {
  return (
    <div className='mt-[50px]'>
        <h2 className='text-[34px] font-poppins-bold mb-[15px] md:mb-[20px] text-[#597C61] text-center'>Core Values</h2>
        <div className='bg-[#597C61] text-[white] flex flex-col-reverse p-[15px] md:flex-row md:justify-center md:items-center md:pl-[80px] text-center md:text-left py-[30px] md:py-[40px]'>
            <Image src={ValuesPic} alt="About us pic" className='md:w-[45%]' />
            <div className='md:w-[50%] md:h-[100%] md:ml-[50px]'>
                <p className='text-[18px] font-poppins-regular mb-[15px] md:mb-[20px] md:w-[90%]'>Sustainability, collaboration, innovation, and urgency are the key elements driving our commitment to a sustainable future. We work together with communities, organizations, and governments to make a positive impact, embracing new technologies and solutions to reduce our carbon footprint. Recognizing the urgent need for action, we are dedicated to promoting practices that preserve the planet for future generations.</p>
            </div>
        </div>
    </div>
  )
}

export default Values