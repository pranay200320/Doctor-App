import { Link, NavLink } from "react-router-dom";
// import { specialityData } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SpecialityMenu = () => {
  const { specialityData } = useContext(AppContext);
  return (
    <>
      <div
        className="flex flex-col  items-center gap-4 py-16 text-gray-800"
        id="speciality"
      >
        <h1 className="text-3xl font-medium">Find by Speciality </h1>
        <p className="sm:w-1/3 text-center text-sm ">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.bghh
        </p>
        <div className="flex sm:justify-center flex-col md:flex-row gap-4 pt-5 w-full overflow-hidden">
          {specialityData.map((items, index) => (
            <NavLink
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-5px] transition-all duration-500"
              key={index}
              to={`/doctors/${items.speciality}`}
            >
              <img className="w-16 sm:w-24 mb-2" src={items.image} alt="" />
              <p className="pt-5 text-sm">{items.speciality}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecialityMenu;
