import React from "react";
import { useNavigate } from "react-router-dom";

const hostels = [
  {
    name: "Sunrise PG",
    location: "Delhi University",
    price: "₹4500/month",
    image: "https://picsum.photos/400/200?random=1",
    description: "A cozy and affordable PG near Delhi University with all amenities.",
  },
  {
    name: "GreenNest Hostel",
    location: "Bangalore",
    price: "₹6000/month",
    image: "https://picsum.photos/400/200?random=2",
    description: "Green and peaceful environment perfect for students and professionals.",
  },
  {
    name: "Comfort Stay",
    location: "Pune",
    price: "₹5000/month",
    image: "https://picsum.photos/400/200?random=3",
    description: "Comfortable stay with mess facilities and WiFi.",
  },
  {
    name: "New Frezon Hostel",
    location: "East Delhi",
    price: "₹4500/month",
    image: "https://picsum.photos/400/200?random=4",
    description: "Safe and affordable hostel for students.",
  },
  {
    name: "Chanakya Boys Hostel",
    location: "Patna",
    price: "₹3000/month",
    image: "https://picsum.photos/400/200?random=5",
    description: "Budget-friendly boys hostel with basic facilities.",
  },
  {
    name: "Mahalaxmi Girls Hostel",
    location: "Patna",
    price: "₹3500/month",
    image: "https://picsum.photos/400/200?random=6",
    description: "Secure girls hostel with CCTV and caretaker.",
  },
  {
    name: "Shanti Hostel",
    location: "Patna",
    price: "₹4000/month",
    image: "https://picsum.photos/400/200?random=7",
    description: "Peaceful stay for students in Patna.",
  },
  {
    name: "AVMS Girls PG",
    location: "Delhi",
    price: "₹5000/month",
    image: "https://picsum.photos/400/200?random=8",
    description: "Modern PG with attached bathrooms and WiFi.",
  },
];

const Features = ({ searchQuery = "" }) => {
  const query = searchQuery.trim();
  const navigate = useNavigate();

  const filteredHostels = hostels.filter((hostel) => {
    if (query === "") return true;
    return (
      hostel.name.localeCompare(query, undefined, { sensitivity: "base" }) === 0 ||
      hostel.name.includes(query) ||
      hostel.location.localeCompare(query, undefined, { sensitivity: "base" }) === 0 ||
      hostel.location.includes(query)
    );
  });

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <h2 className="text-center text-2xl font-bold mb-5">
        {query ? `Search Results for "${query}"` : "🏠 Featured Hostels"}
      </h2>

      {filteredHostels.length === 0 ? (
        <p className="text-center text-gray-600">No hostels found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredHostels.map((hostel, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={hostel.image}
                alt={hostel.name}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-3 text-center">
                <h3 className="font-semibold">{hostel.name}</h3>
                <p className="text-sm text-gray-600">
                  {hostel.location} | {hostel.price}
                </p>
                <button
                  onClick={() => navigate(`/hostel/${encodeURIComponent(hostel.name)}`, { state: hostel })}
                  className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Features;
