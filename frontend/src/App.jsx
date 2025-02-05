import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointmentpage from "./pages/Appointmentpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/Privecy";

function App() {
  return (
    <>
      <div className="mx-4 sm:mx-[10%] flex flex-col min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          {/* Dynamic Routing */}
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointment" element={<MyAppointments />} />
          <Route path="/appointment/:docId" element={<Appointmentpage />} />
          <Route path="/privecy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
