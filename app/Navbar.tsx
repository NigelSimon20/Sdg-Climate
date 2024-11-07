'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`w-full bg-white shadow-md fixed top-0 left-0 z-50 px-30px md:px-[80px] transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-blue-500">Logo</Link>
        </div>

        {/* Links (hidden on small screens) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 font-monserat-semibold hover:text-blue-500">
            Home
          </Link>
          <Link href="/" className="text-gray-700 font-monserat-semibold hover:text-blue-500">
            About Us
          </Link>
          <Link href="/" className="text-gray-700 font-monserat-semibold hover:text-blue-500">
            Our Work
          </Link>
          <Link href="/" className="text-gray-700 font-monserat-semibold hover:text-blue-500">
            Impact
          </Link>
        </div>

        {/* Search (hidden on small screens) */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border-[1px] border-black rounded-lg focus:outline-black focus:border-black font-monserat-semibold"
          />
        </div>

        {/* Hamburger Menu (visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4">
          <Link href="/" className="text-gray-700 font-monserat-semibold">
            Home
          </Link>
          <Link href="/" className="text-gray-700 font-monserat-semibold">
            About Us
          </Link>
          <Link href="/" className="text-gray-700 font-monserat-semibold">
            Our Work
          </Link>
          <Link href="/" className="text-gray-700 font-monserat-semibold">
            Impact
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border-[1px] border-black rounded-lg focus:outline-black focus:border-black font-monserat-semibold"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
