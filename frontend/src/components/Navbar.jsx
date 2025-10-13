import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 px-6 py-3 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="text-2xl font-bold text-white">
        <Link to="/">🏨 HostelHub</Link>
      </div>

      {/* Middle - Links */}
      <ul className="hidden md:flex space-x-8 text-white font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-black transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/findhostel"
            className="hover:text-black transition"
          >
            Find Hostel
          </Link>
        </li>
        {/* <li>
          <Link
            to="/posthostel"
            className="hover:text-black transition"
          >
            Post Hostel
          </Link>
        </li> */}
        <li>
          <Link
            to="/contact"
            className="hover:text-black transition"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Right - Button */}
      <div>
        <Link to="/signup">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            SignUp
          </button>
        </Link>
      </div>
      
    </nav>
  );
}
