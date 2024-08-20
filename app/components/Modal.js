// components/Modal.js
import { useState } from "react";
import Image from "next/image"; // Assuming you use Next.js, adjust if using plain React

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Sign Up for a Loan
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-lg font-medium mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Email Address"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#4b144b] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#3c0c3c] transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
