import React from 'react'
import WorkComponent from './WorkComponent'
import imageOne from '../../public/img/image-1.png'
import imageTwo from '../../public/img/image-2.png'
import imageThree from '../../public/img/image-3.png'


const Work = () => {
  return (
    <div className='mt-[50px]'>
        <h2 className='text-[34px] font-poppins-bold mb-[15px] md:mb-[20px] text-[#597C61] text-center'>Our Work</h2>
        <div>
            <WorkComponent 
            displayName='auto'
            FirstHeading='Climate Mitigation Projects'
            widthOfSubHeading='w-[100%]'
            widthOfSubdescription='md:w-[85%]'
            styleVisiblity='block'
            subheading='Renewable Energy Adoption'
            description='We promote and support the transition to clean, renewable energy sources like solar, wind, and hydropower. Our goal is to help communities reduce their reliance on fossil fuels, cut down on greenhouse gas emissions, and save money through sustainable energy solutions.'
            image={imageOne}
            />

            <WorkComponent 
            displayName='md:flex-row-reverse'
            FirstHeading='...'
            widthOfSubHeading='md:w-[70%] md:ml-[30px]'
            widthOfSubdescription='md:w-[85%] md:ml-[30px]'
            styleVisiblity='hidden'
            subheading='Reforestation and Ecosystem Restoration'
            description='Forests play a crucial role in absorbing carbon dioxide and protecting biodiversity. We organize reforestation projects and support efforts to restore damaged ecosystems. By planting trees and rehabilitating lands, we contribute to the global fight against climate change'
            image={imageTwo}
            />

            <WorkComponent 
            displayName='auto'
            FirstHeading='...'
            widthOfSubHeading='w-[100%]'
            widthOfSubdescription='md:w-[85%]'
            styleVisiblity='hidden'
            subheading='Climate Education & Advocacy'
            description='Knowledge is power. We work with schools, universities, and local organizations to provide education on climate change and sustainability. We also advocate for stronger environmental policies at local, national, and global levels to ensure that climate action remains a priority.'
            image={imageThree}
            />
        </div>
    </div>
  )
}

export default Work