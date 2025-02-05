import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <>
      {/* border-b in border in bottom */}
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        {/* width of image is 176px */}
        {/* Programmatic navigation means changing the page (route) inside a function instead of using a clickable link (<Link> or <NavLink>). This is useful when you need to navigate based on some logic */}
        <img
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          className="w-44 cursor-pointer"
          src={assets.logo}
          alt="Logo"
        />

        <ul className="hidden md:flex items-start gap-5 font-medium">
          {/* Use <NavLink> when you want to visually indicate which route is active, such as for navigation menus. */}
          <NavLink to="/">
            <li className="py-1">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1">All DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1">ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">CONTACT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {token ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img
                className="w-8 rounded-full "
                src={assets.profile_pic}
                alt=""
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              {/* z-index controls the stacking order of elements along the z-axis (depth). It determines which element appears on top when multiple elements overlap. */}
              <div className="absolute top-0 right-0 pt-[49px] text-base font-medium text-gray-600  hidden z-20 group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded-lg flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("my-appointment")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            >
              Create account
            </button>
          )}
          <img
            onClick={() => setShowMenu(true)}
            src={assets.menu_icon}
            className="w-6 md:hidden text-right"
            alt=""
          />
          <div
            className={`${
              showMenu ? "fixed w-full" : "h-0 w-0"
            } md:hidden right-0 bottom-0 top-0 z-20 overflow-hidden bg-white transition-all `}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <img
                onClick={() => setShowMenu(false)}
                className="w-36"
                src={assets.logo}
                alt=""
              />
              <img
                onClick={() => setShowMenu(false)}
                className={`w-7`}
                src={assets.cross_icon}
                alt=""
              />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink
                className="py-2 px-4 inline-block"
                to="/"
                onClick={() => {
                  setShowMenu(false);
                  scrollTo(0, 0);
                }}
              >
                <p>Home</p>
              </NavLink>
              <NavLink
                className="py-2 px-4  inline-block"
                to="/doctors"
                onClick={() => {
                  setShowMenu(false);
                  scrollTo(0, 0);
                }}
              >
                <p>All Doctors</p>
              </NavLink>
              <NavLink
                className="py-2 px-4 inline-block"
                to="/about"
                onClick={() => {
                  setShowMenu(false);
                  scrollTo(0, 0);
                }}
              >
                <p>About</p>
              </NavLink>
              <NavLink
                className="py-2 px-4 inline-block"
                to="/contact"
                onClick={() => {
                  setShowMenu(false);
                  scrollTo(0, 0);
                }}
              >
                <p>Contact</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
