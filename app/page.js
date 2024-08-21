"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // State to handle which image is visible
  const [currentImage, setCurrentImage] = useState(0);

  // Array of image sources
  const images = ["/images/suit.jpg", "/images/ogo.jpg"];

  useEffect(() => {
    // Switch image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Adjust the timing as needed

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <section className="flex flex-col items-center justify-center min-h-[150px] mt-8 px-4 text-center bg-white">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          WELCOME TO SOCIUS SYNERGIA LIMITED!
        </h1>
        <p className="text-lg md:text-xl mt-2 text-gray-600">
          COMPANIONED COOPERATION
        </p>
      </section>

      {/* Collaborative Approach Section */}
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="p-8 text-gray-800 bg-white shadow-xl rounded-lg border border-gray-200">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Collaborative Approach for Success
            </h2>
            <p className="text-lg leading-relaxed">
              We are a lending company that utilizes a collaborative and
              cooperative approach, emphasizing the idea of working together for
              mutual benefit and success.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/Humaaans - Chill at Home.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="Collaborative work"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <section className="bg-white py-6">
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          {" "}
          OUR SERVICES{" "}
        </h2>
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/cubes-getting-approved-for-a-loan-at-the-bank.png"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Loan services"
                className="rounded-lg"
              />
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Our Loan Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <svg
                    className="w-6 h-6 flex-shrink-0 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 13l4 4L18 7"
                    />
                  </svg>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                      Personal Loans
                    </h4>
                    <p className="text-gray-600">
                      Tailored solutions to meet your individual needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    className="w-6 h-6 flex-shrink-0 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 13l4 4L18 7"
                    />
                  </svg>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                      Business Loans
                    </h4>
                    <p className="text-gray-600">
                      Fuel your entrepreneurial spirit with our competitive
                      rates.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    className="w-6 h-6 flex-shrink-0 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 13l4 4L18 7"
                    />
                  </svg>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                      Debt Consolidation
                    </h4>
                    <p className="text-gray-600">
                      Streamline your finances with our expert solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="bg-gray-100 py-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          WHY TRUST US?
        </h2>
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-6">
          <div className="flex flex-wrap justify-around gap-6">
            <div className="bg-[#650E6C] text-white p-6 flex-1 min-w-[200px] rounded-lg shadow-lg min-h-[200px] flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-2">TRANSPARENT RATES</h3>
              <p>No hidden fees or surprises</p>
            </div>
            <div className="bg-[#B01371] text-white p-6 flex-1 min-w-[200px] rounded-lg shadow-lg min-h-[200px] flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-2">FLEXIBLE TERMS</h3>
              <p>Repay on your own terms with customizable loan options.</p>
            </div>
            <div className="bg-[#C38AC5] text-white p-6 flex-1 min-w-[200px] rounded-lg shadow-lg min-h-[200px] flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-2">DEDICATED SUPPORT</h3>
              <p>Our team is here to guide you through the lending process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-gray-100 py-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          CUSTOMER TESTIMONIALS
        </h2>
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-6 flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-full md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 bg-gray-200 rounded-full overflow-hidden">
            <div className="relative w-full h-full">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-1000 ${
                    index === currentImage
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-700">
                Socius Synergia Limited made the loan process hassle-free. I was
                able to get the funds I needed for my business with ease.
              </p>
              <p className="font-bold text-gray-900">- Emeka Okwudike</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-700">
                Socius Synergia Limited helped me consolidate my numerous debts
                which I have been struggling with. I am super grateful for them.
              </p>
              <p className="font-bold text-gray-900">- Benita Dongo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-[#4b144b] text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            GET STARTED TODAY
          </h2>
          <p className="text-lg md:text-xl mb-8 mx-auto max-w-2xl">
            Ready to take the first step towards financial freedom? Fill out our
            quick and easy application form to see how Prosper Lend can help you
            achieve your goals.
          </p>
          <a
            href="/apply"
            className="inline-block bg-gray-200 text-black py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-300 transition-colors"
          >
            APPLY NOW
          </a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
            CONTACT US
          </h3>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Have questions or need assistance? Our friendly team is here to
            help. Reach out to us via phone or email, and we will get back to
            you promptly.
          </p>
          <div className="text-lg md:text-xl text-gray-600">
            <p className="mb-2">
              Phone:{" "}
              <a
                href="tel:+234815656536"
                className="text-blue-500 hover:underline"
              >
                +234 815 656 536
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@sociussynergia.com"
                className="text-blue-500 hover:underline"
              >
                info@sociussynergia.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
