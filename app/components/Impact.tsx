import React from 'react'
import ImpactComponent from './ImpactComponent'
import picOne from '../../public/img/image.png'
import picTwo from '../../public/img/image2.png'
import picThree from '../../public/img/image1.png'

const Impact = () => {
  return (
    <div className='mt-[60px] px-[15px] md:px-[80px]'>
        <h2 className='text-[34px] font-poppins-bold mb-[15px] md:mb-[40px] text-[#597C61] text-center'>Impact</h2>
        <div className='md:flex md:space-x-10 space-y-4 md:space-y-0'>
            <ImpactComponent 
            image={picOne}
            heading='Energy Transition'
            description='We aim to helped over 500 households switch to solar energy and bio gas (LP) in the next 2  years, reducing CO2 emissions by thousands of tons.'
            />
            
            <ImpactComponent 
            image={picTwo}
            heading='Reforestation'
            description='Our projects will aim to plant 100,000 trees in critical areas, help reserve wetlands and swamps helping to restore habitats and reduce atmospheric carbon.'
            />

            <ImpactComponent 
            image={picThree}
            heading='Climate Literacy'
            description='We will educate over 10,000 students on the importance of sustainability and climate action through our outreach programs.'
            />
        </div>
    </div>
  )
}

export default Impact