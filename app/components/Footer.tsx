'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from '../../public/img/logo.png'
import upArrow from '../../public/img/up.png'

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    // Add your logic to send the email to your server or API
  };

  return (
    <>
        <div className="bg-[#597C61] md:flex md:justify-between md:items-start md:p-[80px] p-[30px] md:mt-[100px] font-poppins-light relative space-y-5 md:space-y-0">
      {/* Logo and Social Links Section */}
      <div>
        <div className='flex space-x-2 items-center'>
          <Image src={Logo} alt="logo" width={40} height={40} />
          <h3 className="text-white font-monserat-semibold text-[18px]">Go Green</h3>
        </div>
        <div className="flex space-x-6 mt-8">
          <Link href="#" className="text-white text-[22px]"><FaFacebookF /></Link>
          <Link href="#" className="text-white text-[22px]"><FaXTwitter /></Link>
          <Link href="#" className="text-white text-[22px]"><FaInstagram /></Link>
        </div>
      </div>

      {/* Information Links Section */}
      <div>
        <h3 className="text-white font-bold font-monserat-semibold text-[18px]">Information</h3>
        <Link href="#" className="block text-white mt-2">About Us</Link>
        <Link href="#" className="block text-white mt-2">Our Work</Link>
        <Link href="#" className="block text-white mt-2">Impact</Link>
      </div>

      {/* Helpful Links Section */}
      <div>
        <h3 className="text-white font-bold font-monserat-semibold text-[18px]">Helpful Links</h3>
        <Link href="#" className="block text-white mt-2">Services</Link>
        <Link href="#" className="block text-white mt-2">Supports</Link>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="">
        <form
          onSubmit={handleSubmit}
        >
          <h3 className="font-semibold mb-4 font-monserat-semibold text-white text-[18px]">Subscribe to our Newsletter</h3>
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border-[2px] border-white focus:ring-2 focus:ring-[#597C61] focus:outline-none bg-[#597C61] text-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#597C61] text-white font-medium rounded-md focus:outline-none focus:ring-2 border-[2px] border-white"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
     <Link href="#"> <Image src={upArrow} alt="image" width={35} height={35} className='absolute bottom-[100px] right-[30px] md:bottom-[30px] md:right-[80px] object-cover' /></Link>
    </div>
        <span className='bg-[white] text-[#597C61] flex justify-center align-center p-[15px] font-poppins-bold'>Copyright © Go Green 2024. All rights reserved.</span>
    </>
  );
};

export default Footer;
