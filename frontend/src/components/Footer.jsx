import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white text-gray-700 py-10 px-5 md:px-20 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2">
            {/* <span className="text-blue-600 text-2xl font-bold">Prescripto</span> */}
            <img
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              src={assets.logo}
              alt="Prescripto Logo"
              className="w-50 h-50 cursor-pointer"
            />
          </div>
          <p className="text-sm mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  navigate("/");
                  scrollTo(0, 0);
                }}
                className="hover:text-blue-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-600">
                About us
              </NavLink>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  scrollTo(0, 0);
                }}
                className="hover:text-blue-600"
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/privecy-policy"
                onClick={() => {
                  // navigate("/");
                  scrollTo(0, 0);
                }}
                className="hover:text-blue-600"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-semibold text-lg mb-3">GET IN TOUCH</h3>
          <p>+0-000-000-000</p>
          <p className="text-blue-600">greatstackdev@gmail.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t mt-6 pt-4 text-center text-sm text-gray-500">
        Copyright 2024 @ Greatstack.dev - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
