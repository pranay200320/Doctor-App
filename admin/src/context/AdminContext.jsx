import { createContext } from "react";
// createContext helps in sharing data between components without passing props manually.
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const value = {};
  return (
    // AdminContext.Provider is a wrapper that provides data (value) to all child components.
    // {props.children} ensures that wrapped components inside <AdminContextProvider> get access to this context.

    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
