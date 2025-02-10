import { createContext, useState } from "react";
// createContext helps in sharing data between components without passing props manually.
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const value = {
    aToken,
    setAToken,
    backendUrl,
  };
  return (
    // AdminContext.Provider is a wrapper that provides data (value) to all child components.
    // {props.children} ensures that wrapped components inside <AdminContextProvider> get access to this context.

    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
