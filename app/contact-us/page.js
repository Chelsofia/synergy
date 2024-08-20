"use client"
import { useState } from "react";
import Image from "next/image";

export default function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Show loading state
    setError(""); // Clear previous errors
    setSuccess(false); // Reset success state

    const formData = new FormData(e.target); // Create FormData from form

    try {
      const response = await fetch("https://formspree.io/f/xanwdzab", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong"); 
      }

      setSuccess(true); // Update success state
      e.target.reset(); // Reset the form
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#4b144b] text-white py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg leading-relaxed">
            We’re here to help you with any questions or concerns you may have.
            Reach out to us through any of the methods below, and we’ll get back
            to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-8">
          {/* Contact Details */}
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">
              Our Contact Information
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-lg leading-relaxed">
                Socius Synergia Limited
                <br />
                Idowu Martins Street
                <br />
                Suite 45
                <br />
                Victoria Island, 4c
                <br />
               Lagos, Nigeria
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-lg leading-relaxed">+1 (234) 567-8901</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-lg leading-relaxed">
                <a
                  href="mailto:contact@sociussynergia.com"
                  className="text-[#4b144b] hover:underline"
                >
                  contact@sociussynergia.com
                </a>
              </p>
            </div>
          </div>
          {/* Map Section */}
          <div className="relative w-full md:w-1/2 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.698240275893!2d3.4199908999999997!3d6.4327949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52cb25ea145%3A0xe17131f1d4a072d2!2sIdowu%20Martins%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1724169376194!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#4b144b] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#3c0c3c] transition"
              >
                Send Message
              </button>
            </div>
          </form>
          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center items-center mt-8">
              <Image
                src="/images/logo.JPG"
                alt="Loading"
                width={50}
                height={50}
                className="animate-spin h-10 w-10 rounded-full"
              />
            </div>
          )}
          {/* Error and Success Messages */}
          {error && (
            <div className="text-red-500 text-center mt-4">
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="text-green-500 text-center mt-4">
              <p>Your message has been sent successfully!</p>
            </div>
          )}
        </div>
      </section>

     
    </main>
  );
}
