import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import RealatedDoctor from "../components/RealatedDoctor";

const Appointmentpage = () => {
  // useParams allows you to access the parameters in the URL.
  const { docId } = useParams();

  const { doctors, currency } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  //create a state for store docInfo
  const [docterInfo, setDoctorInfo] = useState([]);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = await doctors.find((doc) => doc._id === docId);
    setDoctorInfo(docInfo);
  };
  // in this function add the calculaion of  logic of avilable  slot

  const getAvailable = async () => {
    // Clearing previous slots
    setDocSlot([]);
    // Getting current date
    // Date Object
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      // console.log(today);
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Setting end time of the day (9:00 PM)
      let endTime = new Date();

      endTime.setDate(today.getDate() + i);
      // dateObject.setHours(hours, minutes, seconds, milliseconds);
      endTime.setHours(21, 0, 0, 0);
      if (today.getDate() === currentDate.getDate()) {
        // Adjusting the starting time for the current day
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let TimeSlot = [];
      // This is a loop that runs as long as currentDate is before the endTime (9:00 PM for that day).
      // The currentDate is incremented by 30 minutes.
      while (currentDate < endTime) {
        // This converts the currentDate object into a readable time string, like "10:00 AM" or "2:30 PM".
        let formattedTime = currentDate.toLocaleTimeString([], {
          // The options { hour: "2-digit", minute: "2-digit" } ensure the time is formatted in 2-digit hour and minute format, e.g., "10:00" or "14:30".
          hour: "2-digit", // Corrected from `hours` to `hour`
          minute: "2-digit", // Corrected from `minute` to `minute`
        });

        // Adding the slot to the array
        TimeSlot.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Incrementing current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlot((prev) => [...prev, TimeSlot]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useState(() => {
    getAvailable();
  }, [docterInfo]);
  useEffect(() => {
    // console.log(docSlot);
  }, [docSlot]);

  return (
    <div>
      {/* doctor imformation*/}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docterInfo.image}
            alt=""
          />
        </div>
        {/* Doctor Imformation Name,degree,about */}

        <div className="flex-1 border border-gray-500 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docterInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docterInfo.degree} - {docterInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full hover:text-[20px] duration-500">
              {docterInfo.experience}
            </button>
          </div>
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About
              <img
                className="cursor-pointer hover:bg-gray-300 rounded-full hover:size-5 duration-300"
                src={assets.info_icon}
                alt=""
              />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {docterInfo.about}
            </p>
          </div>

          <p className="text-gray-500 font-medium mt-4">
            Appointment fee:
            <span className="text-gray-600">
              {currency}
              {docterInfo.fees}
            </span>
          </p>
        </div>
      </div>
      {/* -----ADD BOOKING SLOTE----- */}

      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p className="text-[20px]">Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlot.length &&
            docSlot.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer  ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-200"
                }`}
                key={index}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlot.length &&
            docSlot[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer  
                  ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border-gray-300"
                  }
                  `}
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
          Book an appointment
        </button>
      </div>
      {/* Listing Related Doctors */}
      <RealatedDoctor docId={docId} speciality={docterInfo.speciality} />
    </div>
  );
};

export default Appointmentpage;
