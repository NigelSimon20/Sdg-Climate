'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    // Add your logic to send the email to your server or API
  };

  return (
    <div className="bg-[#597C61] md:flex md:justify-between md:items-start md:p-[80px] p-[15px] md:mt-[100px] font-poppins-light">
      {/* Logo and Social Links Section */}
      <div>
        <div>
          <Image src="" alt="logo" width={50} height={50} />
          <h3 className="text-white font-monserat-semibold">Go Green</h3>
        </div>
        <div className="flex space-x-4 mt-4">
          <Link href="#" className="text-white">h</Link>
          <Link href="#" className="text-white">r</Link>
          <Link href="#" className="text-white">e</Link>
        </div>
      </div>

      {/* Information Links Section */}
      <div>
        <h3 className="text-white font-bold mt-6 font-monserat-semibold">Information</h3>
        <Link href="#" className="block text-white mt-2">About Us</Link>
        <Link href="#" className="block text-white mt-2">Our Work</Link>
        <Link href="#" className="block text-white mt-2">Impact</Link>
      </div>

      {/* Helpful Links Section */}
      <div>
        <h3 className="text-white font-bold mt-6 font-monserat-semibold">Helpful Links</h3>
        <Link href="#" className="block text-white mt-2">Services</Link>
        <Link href="#" className="block text-white mt-2">Supports</Link>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="">
        <form
          onSubmit={handleSubmit}
          className=""
        >
          <h2 className="font-semibold mb-4 font-monserat-semibold">Subscribe to our Newsletter</h2>
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
