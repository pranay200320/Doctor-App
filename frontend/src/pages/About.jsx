import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-[60vh] bg-white text-gray-800">
      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          About <span className="text-blue-600">Us</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={assets.about_image} // Replace with the actual image path
            alt="Doctors"
            className="w-full md:w-[300px] h-[300px] rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <p className="mb-4">
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently.
            </p>
            <p className="mb-4">
              Prescripto is committed to excellence in healthcare technology. We
              strive to enhance our platform with the latest advancements to
              improve user experience.
            </p>
            <p className="font-semibold">Our Vision</p>
            <p>
              Our vision is to create a seamless healthcare experience for every
              user, bridging the gap between patients and healthcare providers.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-12">
        <h3 className="text-3xl font-bold text-center mb-8">
          Why <span className="text-blue-600">Choose Us</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {/* Card 1 */}
          <div className="group bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:-translate-y-3">
            <h4 className="font-bold text-xl mb-4 text-blue-600">Efficiency</h4>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          {/* Card 2 */}
          <div className="group bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:-translate-y-3">
            <h4 className="font-bold text-xl mb-4 text-blue-600">
              Convenience
            </h4>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          {/* Card 3 */}
          <div className="group bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:-translate-y-3">
            <h4 className="font-bold text-xl mb-4 text-blue-600">
              Personalization
            </h4>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
