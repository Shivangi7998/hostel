import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🏨 HostelHub
          </h2>
          <p className="mt-2 text-gray-300">
            Search and book affordable hostels across India.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/findhostel" className="hover:text-gray-300">Find Hostel</Link>
            </li>
            <li>
              <Link to="/post" className="hover:text-gray-300">Post Hostel</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 social-icons">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-400 mt-8 text-sm">
        © 2025 HostelHub | Made with ❤️ by Shivangi
      </p>
    </footer>
  );
};

export default Footer;



