// app/components/Footer.jsx

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Section */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a dedicated team committed to delivering top-notch web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <Link href="/" legacyBehavior>
                  <a className="hover:text-white">Home</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/about" legacyBehavior>
                  <a className="hover:text-white">About</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-white">Services</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/contact" legacyBehavior>
                  <a className="hover:text-white">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us & Subscribe */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>

            {/* Subscription Form */}
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 mb-2 sm:mb-0 sm:mr-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Developed by Hammad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;