import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface WorkComponentProps{
    FirstHeading: string;
    subheading: string;
    description: string;
    image: StaticImageData;
    styleVisiblity: string;
    displayName: string;
    widthOfSubHeading: string;
    widthOfSubdescription: string;
}

const WorkComponent = ({FirstHeading, subheading, description, image, styleVisiblity, displayName, widthOfSubHeading, widthOfSubdescription} : WorkComponentProps) => {
  return (
    <div className={`px-4 text-[#597C61] md:flex md:px-[80px] ${displayName} mt-[30px] md:mt-[70px]`}>
        <div className='md:w-[50%]'>
        <h2 className={`font-poppins-bold text-[22px] mb-[10px] md:w-[50%] md:text-[24px] md:mb-[25px] md:mt-[25px] ${styleVisiblity}`}>{FirstHeading}</h2>
        <h3 className={`font-poppins-medium text-[20px] mb-[10px] md:mb-[30px] md:text-[24px] ${widthOfSubHeading}`}>{subheading}</h3>
        <p className={`font-poppins-regular text-[18px] mb-[10px] ${widthOfSubdescription}`}>{description}</p>
        </div>
        <Image src={image} alt="Image" className=' md:w-[50%]' />
    </div>
  )
}

export default WorkComponent