"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import {logo} from "../../public/images/logo.JPG"

const Footer = () => {
  return (
    <footer className="bg-[#2F2D2D] text-white py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
         
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold mb-2"
            >
              <span className="sr-only">Socius Synergia Limited</span>
            
              <span className="text-white text-2xl font-extrabold ml-4 hidden md:inline">
                SOCIUS SYNERGIA LIMITED
              </span>
            </Link>
            <p className="text-gray-400 text-center md:text-left">
              Empowering your financial future with personalized solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="hover:text-gray-400">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are" className="hover:text-gray-400">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-gray-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p className="text-gray-400 mb-2">
                Phone:{" "}
                <a href="tel:+234815656536" className="hover:text-gray-300">
                  +234 815 656 536
                </a>
              </p>
              <p className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:info@sociussynergia.com"
                  className="hover:text-gray-300"
                >
                  info@sociussynergia.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Socius Synergia Limited. All
            rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/iamchelsofia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/rachel-asse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/thechelsofia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
