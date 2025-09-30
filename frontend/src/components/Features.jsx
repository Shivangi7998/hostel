import React from "react";

const hostels = [
  {
    name: "Sunrise PG",
    location: "Delhi University",
    price: "₹4500/month",
    image: "https://picsum.photos/400/200?random=1",
  },
  {
    name: "GreenNest Hostel",
    location: "Bangalore",
    price: "₹6000/month",
    image: "https://picsum.photos/400/200?random=2",
  },
  {
    name: "Comfort Stay",
    location: "Pune",
    price: "₹5000/month",
    image: "https://picsum.photos/400/200?random=3",
  },
  {
    name: "New Frezon hostel",
    location: "East Delhi",
    price: "₹4500/month",
    image: "https://picsum.photos/400/200?random=4",
  },
  {
    name: "Chanakya Boys Hostel",
    location: "Patna",
    price: "₹3000/month",
    image: "https://picsum.photos/400/200?random=5",
  },
  {
    name: "Mahalaxmi Girls Hostel",
    location: "Patna",
    price: "₹3500/month",
    image: "https://picsum.photos/400/200?random=6",
  },
  {
    name: "Shanti hostel",
    location: "Patna",
    price: "₹4000/month",
    image: "https://picsum.photos/400/200?random=7",
  },
  {
    name: "AVMS Girls pg",
    location: "Delhi",
    price: "₹5000/month",
    image: "https://picsum.photos/400/200?random=8",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Hostels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hostels.map((hostel, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden 
            hover:shadow-xl transform transition duration-300 hover:scale-105"
          >
            <img
              src={hostel.image}
              alt={hostel.name}
              className="w-full h-40 object-cover transition duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-4 text-center transition duration-300">
              <h3 className="text-lg font-semibold">{hostel.name}</h3>
              <p className="text-gray-600">
                {hostel.location} | {hostel.price}
              </p>
              <button
                className="mt-3 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md 
                hover:bg-indigo-700 hover:scale-105 transition duration-300 ease-in-out"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
