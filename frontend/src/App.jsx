import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignupSelection";
import Findhostel from "./pages/Findhostel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Posthostel from "./pages/Posthostel";
import Contacthostel from "./pages/Contacthostel";
import HostelDetails from "./pages/HostelDetails";
import AdminLogin from "./pages/AdminLogin";
import SignupSelection from "./pages/SignupSelection";
import UserLogin from "./pages/UserLogin";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupSelection />} />
        <Route path="/findhostel" element={<Findhostel />} />
        {/* <Route path="/posthostel" element={<Posthostel />} /> */}
        <Route path="/contact" element={<Contacthostel />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/hostel/:name" element={<HostelDetails />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
          
      </Routes>
      <Footer />
    </>
  );
}

export default App;
