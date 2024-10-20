'use client'; // This directive ensures the component is rendered on the client side

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import {  XIcon } from '@heroicons/react/outline';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked (useful for single-page applications)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
            GIAIC
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <Link href="/"
             className="ml-6 text-gray-700 hover:text-blue-600">Home
            </Link>
            <Link href="/about"
               className="ml-6 text-gray-700 hover:text-blue-600">About
            </Link>
            <Link href="/services"
               className="ml-6 text-gray-700 hover:text-blue-600">Services
            </Link>
            <Link href="/contact"
               className="ml-6 text-gray-700 hover:text-blue-600">Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/"
                onClick={handleLinkClick}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Home
            </Link>
            <Link href="/about"
                onClick={handleLinkClick}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
              >
                About
            </Link>
            <Link href="/services"
                onClick={handleLinkClick}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
              >
                Services
            </Link>
            <Link href="/contact"
                onClick={handleLinkClick}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;