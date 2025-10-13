
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupSelection() {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Please select a role!");
      return;
    }

    if (selectedRole === "user") {
      navigate("/UserLogin");
    } else if (selectedRole === "admin") {
      navigate("/AdminLogin");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Choose Account Type
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Radio Buttons */}
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="role"
                value="user" 
                checked={selectedRole === "user"}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-700 font-medium">User</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={selectedRole === "admin"}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-700 font-medium">Admin</span>
            </label>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
