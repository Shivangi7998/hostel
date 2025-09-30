import React, { useState } from "react";

const Post = () => {
  const [formData, setFormData] = useState({
    hostelName: "",
    city: "",
    college: "",
    price: "",
    amenities: [],
    contact: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        amenities: checked
          ? [...prev.amenities, value]
          : prev.amenities.filter((a) => a !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Hostel posted successfully!");
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 py-10 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Post Your Hostel</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Hostel Name */}
          <div>
            <label className="block font-medium">Hostel Name</label>
            <input
              type="text"
              name="hostelName"
              value={formData.hostelName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>

          {/* Nearby College */}
          <div>
            <label className="block font-medium">Nearby College</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium">Price per Month (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>

          {/* Amenities */}
          <div>
            <label className="block font-medium">Amenities</label>
            <div className="flex gap-4 mt-2">
              {["WiFi", "Food", "AC", "Laundry"].map((amenity) => (
                <label key={amenity} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={amenity}
                    checked={formData.amenities.includes(amenity)}
                    onChange={handleChange}
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block font-medium">Contact Info</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium">Upload Hostel Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="mt-2"
              accept="image/*"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700"
          >
            Submit Hostel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
