// src/PrivacyPolicy.js
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PrivacyPolicy = () => {
  const { assets } = useContext(AppContext);
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hospital Logo Section */}
      <div className="flex justify-center mb-6">
        <img
          src={assets.logo} // Replace with the actual path to the logo
          alt="Prescripto Logo"
          className="w-32 h-auto cursor-pointer"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">
        Privacy Policy
      </h1>
      <p className="mb-4 text-justify">
        This privacy policy ("Policy") explains how Prescripto ("us", "we",
        "our") collects, uses, and protects the information you provide when you
        visit or use our website, facilities, or services ("Services").
      </p>
      <p className="mb-4 text-justify">
        We are committed to safeguarding your personal and medical information
        in compliance with applicable laws and regulations, including the Health
        Insurance Portability and Accountability Act (HIPAA) and other regional
        data protection laws.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Personal identification information (e.g., name, date of birth,
          contact details).
        </li>
        <li>
          Health-related information (e.g., medical history, test results,
          prescriptions).
        </li>
        <li>Insurance and payment details.</li>
        <li>
          Electronic health records (EHR) and any information provided during
          visits or consultations.
        </li>
        <li>
          Website usage data, such as IP address, browsing behavior, and
          preferences.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide high-quality medical care and services.</li>
        <li>To schedule appointments and manage your healthcare records.</li>
        <li>To process insurance claims and payments.</li>
        <li>To comply with legal, regulatory, or auditing requirements.</li>
        <li>
          To communicate updates about your health, treatment plans, and
          upcoming appointments.
        </li>
        <li>
          To improve our facilities, services, and overall patient experience.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Protecting Your Information
      </h2>
      <p className="mb-4 text-justify">
        Prescripto prioritizes the security of your data and employs advanced
        technology and strict protocols to protect it from unauthorized access,
        disclosure, or misuse. Our staff undergoes regular training on data
        privacy, and we ensure compliance with all relevant laws, including
        HIPAA.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Cookies and Website Data
      </h2>
      <p className="mb-4 text-justify">
        Our website uses cookies to improve user experience and provide
        personalized content. By using our website, you consent to our use of
        cookies. You can adjust your browser settings to disable cookies, but
        some features of the site may not function properly as a result.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Sharing Your Information
      </h2>
      <p className="mb-4 text-justify">
        We only share your information with authorized personnel, healthcare
        providers, insurance companies, or as required by law. We do not sell
        your personal or medical information to third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Your Rights as a Patient
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>You have the right to access your medical records.</li>
        <li>You can request corrections to your personal information.</li>
        <li>
          You may request limitations on how your information is used or shared.
        </li>
        <li>
          You have the right to file a complaint if you believe your data
          privacy has been violated.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Links</h2>
      <p className="mb-4 text-justify">
        Our website may contain links to external websites. We are not
        responsible for the privacy practices or content of these sites. We
        encourage you to review their privacy policies before providing personal
        information.
      </p>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <p className="text-justify">
          If you have any questions about this Privacy Policy or wish to
          exercise your data privacy rights, please contact us at:
        </p>
        <p className="text-justify">
          <strong>Email:</strong> privacy@prescripto.com
          <br />
          <strong>Phone:</strong> (123) 456-7890
          <br />
          <strong>Address:</strong> 123 Prescripto Avenue, Health City, HC 56789
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
