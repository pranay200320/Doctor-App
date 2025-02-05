import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className=" bg-white min-h-screen flex flex-col items-center px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <h1 className="text-2xl sm:text-4xl font-semibold mt-10 text-center">
        CONTACT <span className="text-primary">US</span>
      </h1>

      {/* Content Section */}
      <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-6xl">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <img
            src={assets.contact_image}
            alt="Doctor with patient"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <h2 className="text-lg font-bold text-gray-700">OUR OFFICE</h2>
          <p className="mt-2 text-sm text-gray-600">
            54709 Wilms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Tel: (415) 555-0132 <br />
            Email: greatstackdev@gmail.com
          </p>

          <h2 className="mt-8 text-lg font-bold text-gray-700">
            CAREERS AT PRESCRIPTO
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Learn more about our teams and job openings.
          </p>

          {/* Explore Jobs Button */}
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-dark">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
