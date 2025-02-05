import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <>
      <div className="min-h-[80vh]">
        <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
          My Appointments
        </p>
        <div>
          {doctors.slice(0, 2).map((item, index) => (
            <div
              className="grid grid-col-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b "
              key={index}
            >
              <div>
                <img
                  className="w-36 bg-indigo-50 h-36 "
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">{item.name}</p>
                <p>{item.speciality}</p>
                <p className="mt-4">Address:</p>
                <p className="text-sm">{item.address.line1}</p>
                <p className="text-sm">{item.address.line2}</p>
                <p className="text-sm mt-4">
                  <span>Date & Time:</span> 25,July,2024 | 8:30 PM
                </p>
              </div>
              <div></div>
              <div className="flex flex-col justify-end">
                <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-violet-700 hover:text-white transition-all duration-500 ">
                  Pay Online
                </button>
                <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-700 hover:text-white transition-all duration-500 ">
                  Cancel Appointment 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyAppointments;
