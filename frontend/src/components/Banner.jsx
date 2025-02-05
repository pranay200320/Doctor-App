import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
        {/* left side */}
        <div className="flex-1/2 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
            <p className="mb-5">Book Appointment</p>
            <p>With 100+ Trusted Doctors</p>
          </div>
          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="text-black bg-white px-6 py-3 mt-10 rounded-full font-light capitalize  hover:scale-105 transition-all"
          >
            create account
          </button>
        </div>
        {/* Right Side */}
        <div className=" hidden md:block md:w-1/2 lg:w-[370px] relative">
          <img
            className="w-full absolute bottom-0 md:right-0 lg:right-[-40px]  max-w-md"
            src={assets.appointment_img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
