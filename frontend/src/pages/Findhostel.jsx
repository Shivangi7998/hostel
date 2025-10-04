import React, { useState } from "react";
import Features from "../components/Features";

const Findhostel = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-5 bg-white shadow sticky top-0 z-10">
        <div className="max-w-xl mx-auto flex items-center">
          <input
            type="text"
            placeholder="Search by hostel name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setSearchQuery("")}
            className="px-4 py-3 bg-red-500 text-white rounded-r-lg hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>

      <Features searchQuery={searchQuery} />
    </div>
  );
};

export default Findhostel;
