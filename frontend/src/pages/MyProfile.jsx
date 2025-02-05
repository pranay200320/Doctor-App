import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    Phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-03-20",
  });

  const [isEdit, setIsEdited] = useState(false);
  return (
    <>
      <div className="min-h-[70vh]  max-w-lg flex flex-col gap-2 text-sm">
        <img src={userData.image} alt="User profile" className="w-36 rounded" />
        {isEdit ? (
          <input
            type="text"
            className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
            value={userData.name || ""}
            // { ...prev, name: e.target.value } keeps all previous data but updates name with the new input.
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="text-3xl font-medium mt-4 text-neutral-800">
            {userData.name}
          </p>
        )}

        <hr className="bg-zinc-400 h-[1px] border-none" />

        <div>
          <p className="text-neutral-500 mt-3 underline mb-4 underline-offset-4">
            CONTACT INFORMATION
          </p>
          <div className="grid grid-col-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className="font-medium">Email Id:</p>
            {isEdit ? (
              <input
                type="email"
                className=""
                value={userData.email || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            ) : (
              <p className="text-blue-500">{userData.email}</p>
            )}
            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                className="bg-gray-100 max-w-52"
                value={userData.Phone || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    Phone: e.target.value,
                  }))
                }
              />
            ) : (
              <p className="text-blue-500 cursor-pointer">{userData.Phone}</p>
            )}
            <p className="font-medium">Address :</p>
            {isEdit ? (
              <p>
                <input
                  className="text-gray-400"
                  type="text"
                  value={userData.address?.line1 || ""}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
                <br />
                <input
                  className="text-gray-400"
                  type="text"
                  //  This ensures that if userData.address is undefined or missing, it won't throw an error.
                  value={userData.address?.line2 || ""}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </p>
            ) : (
              <p className="text-neutral-900">
                {userData.address?.line1}
                <br />
                {userData.address?.line2}
              </p>
            )}
          </div>
        </div>
        <div>
          <p className="text-neutral-500 underline mt-3 mb-4">
            BASIC INFORMATION
          </p>

          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                className="max-w-20"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}

            <p>BhirtDay</p>
            {isEdit ? (
              <input
                className="max-w-28"
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob || ""}
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
        <div className="mt-8">
          {/* {isEdit ? (
            <button onClick={() => setIsEdited(false)}>Save Information</button>
          ) : (
            <button onClick={() => setIsEdited(true)}>Edit</button>
          )} */}

          <button
            onClick={() => setIsEdited(true)}
            className=" max-w-20 px-4 py-2 bg-sky-50 text-black font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mx-5"
          >
            Edit
          </button>
          <button
            onClick={() => setIsEdited(false)}
            className=" max-w-64 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Save Information
          </button>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
