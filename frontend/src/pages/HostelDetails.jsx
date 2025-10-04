import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HostelDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hostel = location.state;

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const bookedHostels = JSON.parse(localStorage.getItem("bookedHostels") || "[]");

  if (!hostel) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className="text-lg font-medium">No hostel details found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleBookNow = () => {
    if (!isLoggedIn) {
      navigate("/signup"); // redirect to signup if not logged in
      return;
    }

    if (bookedHostels.includes(hostel.name)) {
      alert("You have already booked this hostel. Please login again for a new booking.");
      localStorage.removeItem("isLoggedIn"); // log out user
      navigate("/login");
      return;
    }

    // Add hostel to booked list
    bookedHostels.push(hostel.name);
    localStorage.setItem("bookedHostels", JSON.stringify(bookedHostels));
    alert(`Booking for ${hostel.name} successful!`);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 min-h-screen bg-gray-50">
      <div className="mb-4">
        {/* <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          ← Back
        </button> */}
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={hostel.image}
          alt={hostel.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{hostel.name}</h1>
          <p className="text-gray-700 mb-3 text-lg">
            📍 <strong>Location:</strong> {hostel.location}
          </p>
          <p className="text-gray-700 mb-3 text-lg">
            💰 <strong>Price:</strong> {hostel.price}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-800">
                🏢 <strong>Rooms Available:</strong> {hostel.roomsAvailable || "N/A"}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-800">
                ❄️ <strong>AC Facility:</strong> {hostel.ac ? "Available" : "Not Available"}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-800">
                🌐 <strong>Wi-Fi:</strong> {hostel.wifi ? "Available" : "Not Available"}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-800">
                🍽️ <strong>Food Facility:</strong> {hostel.food ? "Yes" : "No"}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-800">
                🚻 <strong>Type:</strong> {hostel.genderType || "Not Specified"}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">🏠 Hostel Description</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {hostel.description || "No description available."}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              ← Back
            </button>

            <button
              onClick={handleBookNow}
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Book Now
            </button>

            <a
              href={`tel:${hostel.contact?.replace(/\s+/g, "") || "#"}`}
              className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Contact Owner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetails;
