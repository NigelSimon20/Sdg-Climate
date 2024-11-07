import React from 'react'
import Link from 'next/link'
import BgPic from '../../public/img/banner.png'


const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${BgPic.src})`, height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom'}}>
        <div className='bg-[rgba(0,0,0,0.664)] w-[100%] h-[100%] text-white flex flex-col justify-center items-start p-[15px] md:pl-[80px]'>
            <h1 className='text-[36px] mb-[20px] font-poppins-bold md:text-[40px] md:w-[55%] md:mt-[60px]'>Act Now to Combat Climate Change. Our Future Depends on it</h1>
            <div className='block space-x-5'>
                <Link href="#">
                <button className='font-poppins-regular border-2 border-white p-2'>Learn More</button>
                </Link>
                <Link href="#">
                <button className='font-poppins-regular border-2 border-white p-2'>Discover More</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero