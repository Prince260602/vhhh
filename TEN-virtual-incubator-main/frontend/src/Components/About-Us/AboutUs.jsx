import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-full mx-auto">
      {/* Header Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Who Are We?</h1>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-gray-600 text-sm md:text-lg">
                At The Entrepreneurship Network, we are committed to empowering
                budding entrepreneurs through our comprehensive Virtual
                Incubator Program. Our goal is to provide accessible,
                quality-driven resources and mentorship, designed to help
                individuals at every stage of their entrepreneurial journey.
                From idea validation and market research to business planning
                and funding opportunities, we aim to bridge the gap between
                ambition and success.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://assets.techsmith.com/Images/content/ua-tutorials-snagit-2018/About-Us.png"
                alt="Team collaboration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8">
              <h3 className="text-2xl md:text-4xl font-semibold mb-6">
                What We Do?
              </h3>
              <p className="text-gray-600 text-sm md:text-lg">
                The Virtual Incubator Program is designed to guide participants
                step-by-step, from initial concept to business launch.
                Participants start by joining orientation workshops, connecting
                with mentors, and utilizing curated resources. With expert
                guidance, they gain hands-on experience in business strategy and
                development. By the end, participants are equipped with the
                tools and confidence to bring their vision to life.
              </p>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-2xl md:text-4xl font-semibold mb-6">
                How We Do It?
              </h3>
              <p className="text-gray-600 text-sm md:text-lg">
                Through hands-on projects, structured mentorship, and
                goal-setting, aspiring entrepreneurs can craft unique solutions
                and build scalable business strategies. The program emphasizes
                real-world application, helping participants overcome challenges
                and refine their ideas. By fostering creativity and resilience,
                it prepares them to launch impactful ventures with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
            Why Choose The Entrepreneurship Network?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-pink-50 p-6 rounded-lg">
              <p className="text-gray-800 text-sm md:text-base">
                Our program recognizes that each startup journey is unique. We
                emphasize personalized learning paths, adapting to the different
                goals, skills, and ambitions of each entrepreneur.
              </p>
            </div>
            <div className="bg-pink-100 p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Benefits
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>Personalized mentorship</li>
                <li>Structured learning path</li>
                <li>Networking opportunities</li>
                <li>Resource access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-green-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 text-sm md:text-lg">
            Through our Virtual Incubator Program, we aim to create a global
            learning community where aspiring entrepreneurs can connect,
            collaborate, and grow. Our mission is to guide each entrepreneur on
            a journey of innovation and discovery, equipping them with skills to
            succeed in the modern business landscape.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
