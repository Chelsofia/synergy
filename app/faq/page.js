export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-12 px-4 md:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto">
          {/* FAQ Item */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">What is a loan?</h2>
            <p className="text-lg leading-relaxed">
              A loan is a sum of money borrowed from a lender that must be paid
              back with interest over a specified period. Loans are typically
              used for personal expenses, large purchases, or investments.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              How do I apply for a loan?
            </h2>
            <p className="text-lg leading-relaxed">
              You can apply for a loan by filling out our online application
              form, visiting one of our branches, or contacting our customer
              service team. We will guide you through the application process.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              What documents are required for loan application?
            </h2>
            <p className="text-lg leading-relaxed">
              Generally, you will need to provide proof of identity, proof of
              income, and proof of residence. Additional documents may be
              required depending on the type of loan and your individual
              circumstances.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              How long does it take to get approved?
            </h2>
            <p className="text-lg leading-relaxed">
              Approval times can vary based on the type of loan and the
              completeness of your application. Generally, it takes a few
              business days to process and approve a loan application.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              What are the repayment terms?
            </h2>
            <p className="text-lg leading-relaxed">
              Repayment terms depend on the type of loan and your agreement with
              the lender. Terms can range from a few months to several years,
              with various repayment schedules available.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              What happens if I miss a payment?
            </h2>
            <p className="text-lg leading-relaxed">
              Missing a payment can result in late fees and impact your credit
              score. It’s important to contact us as soon as possible if you’re
              having trouble making a payment so we can discuss possible
              solutions.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Can I pay off my loan early?
            </h2>
            <p className="text-lg leading-relaxed">
              Yes, you can pay off your loan early. In some cases, there may be
              prepayment penalties, so be sure to review your loan agreement or
              contact us to understand any potential fees.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              How can I contact customer support?
            </h2>
            <p className="text-lg leading-relaxed">
              You can reach our customer support team via phone, email, or by
              visiting one of our branches. Our contact information is available
              on our website’s contact page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
