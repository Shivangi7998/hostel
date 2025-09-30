import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Findhostel from "./pages/Findhostel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Posthostel from "./pages/Posthostel";
import Contacthostel from "./pages/Contacthostel";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/findhostel" element={<Findhostel />} />
        <Route path="/posthostel" element={<Posthostel />} />
        <Route path="/contact" element={<Contacthostel />} />
        
          
      </Routes>
      <Footer />
    </>
  );
}

export default App;
