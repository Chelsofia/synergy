"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.JPG";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#4b144b] border-b border-[#42122f]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Logo and Navigation Links */}
          <div className="flex flex-1 items-center justify-center md:justify-between">
            {/* Logo */}
            <Link className="flex items-center" href="/">
              <Image
                className="h-10 w-10 rounded-full"
                src={logo}
                alt="SociusSynergia"
              />
              <span className="text-white text-3xl font-extrabold ml-4 hidden md:inline">
                SOCIUS SYNERGIA LIMITED
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2 ml-6">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "bg-[#C38AC5]" : ""
                } text-white hover:bg-[#C38AC5] rounded-md px-3 py-2 font-bold`}
              >
                HOME
              </Link>
              <Link
                href="/products"
                className={`${
                  pathname === "/products" ? "bg-[#C38AC5]" : ""
                } text-white hover:bg-[#C38AC5] rounded-md px-3 py-2 font-bold`}
              >
                PRODUCTS
              </Link>
              <Link
                href="/who-we-are"
                className={`${
                  pathname === "/who-we-are" ? "bg-[#C38AC5]" : ""
                } text-white hover:bg-[#C38AC5] rounded-md px-3 py-2 font-bold`}
              >
                WHO WE ARE
              </Link>
              <Link
                href="/faq"
                className={`${
                  pathname === "/faq" ? "bg-[#C38AC5]" : ""
                } text-white hover:bg-[#C38AC5] rounded-md px-3 py-2 font-bold`}
              >
                FAQ
              </Link>
              <Link
                href="/contact-us"
                className={`${
                  pathname === "/contact-us" ? "bg-[#C38AC5]" : ""
                } text-white hover:bg-[#C38AC5] rounded-md px-3 py-2 font-bold`}
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-x-0 top-20 bg-[#4b144b] border-b border-[#42122f] rounded-md shadow-lg ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "bg-[#C38AC5]" : ""
                } text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-[#C38AC5]`}
                onClick={handleLinkClick}
              >
                HOME
              </Link>
              <Link
                href="/products"
                className={`${
                  pathname === "/products" ? "bg-[#C38AC5]" : ""
                } text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-[#C38AC5]`}
                onClick={handleLinkClick}
              >
                PRODUCTS
              </Link>
              <Link
                href="/who-we-are"
                className={`${
                  pathname === "/who-we-are" ? "bg-[#C38AC5]" : ""
                } text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-[#C38AC5]`}
                onClick={handleLinkClick}
              >
                WHO WE ARE
              </Link>
              <Link
                href="/faq"
                className={`${
                  pathname === "/faq" ? "bg-[#C38AC5]" : ""
                } text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-[#C38AC5]`}
                onClick={handleLinkClick}
              >
                FAQ
              </Link>
              <Link
                href="/contact-us"
                className={`${
                  pathname === "/contact-us" ? "bg-[#C38AC5]" : ""
                } text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-[#C38AC5]`}
                onClick={handleLinkClick}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
