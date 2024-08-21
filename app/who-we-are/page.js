import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#4b144b] text-white py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg leading-relaxed">
            At Socius Synergia Limited, we are committed to delivering
            innovative financial solutions that empower individuals and
            businesses to achieve their financial goals. Our team of experts
            brings a wealth of experience and a passion for excellence, driving
            us to provide exceptional service and tailored financial strategies.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded with a vision to revolutionize financial services, Socius
              Synergia Limited has grown from a small startup to a leading
              player in the industry. Our journey began with a simple mission:
              to provide accessible, transparent, and efficient financial
              solutions. Over the years, we have expanded our services and
              expertise, continuously adapting to meet the evolving needs of our
              clients.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 h-64">
            <Image
              src="/images/our-story.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white text-gray-800 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
            <p className="text-lg leading-relaxed">
              We uphold the highest standards of integrity in all our dealings,
              ensuring honesty and transparency in every aspect of our business.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
            <p className="text-lg leading-relaxed">
              We are dedicated to driving innovation and continuously improving
              our services to provide cutting-edge solutions that meet our
              client&#39;s needs.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Customer-Centricity</h3>
            <p className="text-lg leading-relaxed">
              Our clients are at the heart of everything we do. We focus on
              understanding their unique needs and delivering personalized
              solutions that exceed their expectations.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
            <p className="text-lg leading-relaxed">
              We strive for excellence in every aspect of our business, from the
              quality of our services to the professionalism of our team.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Teamwork</h3>
            <p className="text-lg leading-relaxed">
              Collaboration and teamwork are key to our success. We believe in
              working together, sharing knowledge, and supporting one another to
              achieve our goals.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            {/* Team Member 1 */}
            <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/images/john.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  alt="John Afolabi"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">John Afolabi</h3>
              <p className="text-lg leading-relaxed">CEO & Founder</p>
              <p className="text-lg leading-relaxed mt-2">
                John has over 20 years of experience in the financial industry
                and is passionate about driving innovation and excellence at
                Socius Synergia Limited.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/images/jane.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  alt="Jane Okeh"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Jane Okeh</h3>
              <p className="text-lg leading-relaxed">Chief Financial Officer</p>
              <p className="text-lg leading-relaxed mt-2">
                With a background in financial management and strategic
                planning, Jane ensures the company&#39;s financial health and
                long-term growth.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/images/mike.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  alt="Michael Hassan"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Michael Hassan</h3>
              <p className="text-lg leading-relaxed">
                Head of Customer Relations
              </p>
              <p className="text-lg leading-relaxed mt-2">
                Michael is dedicated to providing exceptional customer service
                and ensuring that client needs are met with efficiency and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-[#4b144b] text-white py-12 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg leading-relaxed mb-6">
            Whether you have questions about our services or want to learn more
            about how we can help, we are here to assist you. Contact us today
            to start a conversation.
          </p>
          <a
            href="/contact-us"
            className="bg-white text-[#4b144b] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
