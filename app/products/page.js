
"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "../components/Modal"; 

export default function ProductPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main Services Section */}
      <section className="mb-12 px-4 md:px-8">
        <h1 className="text-3xl font-bold text-center pt-4 mb-6">PRODUCTS</h1>
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 mb-12">
          {/* Write-up */}
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">FLEX TILL PAY DAY!</h2>
            <p className="text-lg leading-relaxed">
              Access capital for your personal needs before getting paid. Get up
              to 60% of your salary with flexible repayment terms and
              competitive interest rates.
            </p>
          </div>
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-64">
            <Image
              src="/images/cubes-getting-approved-for-a-loan-at-the-bank.png"
              layout="fill"
              objectFit="contain"
              quality={100}
              alt="Loan Approval"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-white text-gray-800 py-8 px-4 md:px-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          ADDITIONAL SERVICES
        </h2>
        <ul className="list-disc list-inside space-y-4">
          <li className="text-lg leading-relaxed">
            <strong>Credit Counseling:</strong> Get expert advice on managing
            your credit and improving your financial health.
          </li>
          <li className="text-lg leading-relaxed">
            <strong>Financial Planning:</strong> Receive personalized guidance
            on achieving your long-term financial goals.
          </li>
          <li className="text-lg leading-relaxed">
            <strong>Loan Refinancing:</strong> Refinance existing loans to lower
            your interest rates or monthly payments.
          </li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#4b144b] text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">BENEFITS</h2>
        <ol className="list-decimal list-inside space-y-4 mb-6">
          <li className="text-lg leading-relaxed">Flexible repayment terms</li>
          <li className="text-lg leading-relaxed">
            Quick and easy application process
          </li>
          <li className="text-lg leading-relaxed">
            Personalized customer service
          </li>
          <li className="text-lg leading-relaxed">No hidden fees or charges</li>
          <li className="text-lg leading-relaxed">
            Competitive interest rates
          </li>
        </ol>
        <div className="text-center">
          <button
            onClick={openModal}
            className="bg-white text-[#4b144b] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            GET STARTED
          </button>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-100 text-gray-800 py-8 px-4">
        <div className="text-center">
          <p className="text-lg leading-relaxed">
            Apply online, visit a branch, or call us today to learn more about
            our loan services and how we can help you achieve your financial
            goals.
          </p>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
