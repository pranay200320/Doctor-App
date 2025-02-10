import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div className="bd-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
      </div>
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;
