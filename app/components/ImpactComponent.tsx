import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ImpactProps{
    image : StaticImageData;
    heading: string;
    description: string
}

const ImpactComponent = ({image, heading, description} : ImpactProps) => {
  return (
    <div className='bg-[#597C61] text-white p-[15px] md:p-[20px] md:w-[30%]'>
        <Image src={image} alt="image"/>
        <h2 className='font-monserat-semibold text-[24px] my-[10px] md:text-[22px]'>{heading}</h2>
        <p className='font-poppins-regular text-[18px] md:text-[16px]'>{description}</p>
    </div>
  )
}

export default ImpactComponent