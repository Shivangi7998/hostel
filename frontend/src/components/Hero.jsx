export default function Hero() {
  return (
    <section className="bg-blue-100 py-20 text-center transition duration-300 hover:bg-blue-200">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition duration-300 hover:text-blue-700">
        Find The Best Student Hostels
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-600 mb-8 transition duration-300 hover:text-gray-800">
        Search and book affordable hostels across India
      </p>

      {/* Search Box */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter City or College Name"
          className="px-4 py-2 w-72 border border-gray-400 rounded-l-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition duration-300 ease-in-out
          hover:border-blue-600 hover:shadow-lg"
        />
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-r-lg 
          hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </div>
    </section>
  );
}
