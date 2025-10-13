import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     alert("User Signup successful!");
//     navigate("/");
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Check password match first
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("User signed up successfully!");
      navigate("/login");
    } else {
      alert(data.message || "Signup failed!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          User Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/users/login", {
//         email,
//         password,
//       });

//       // Save token if needed
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       // Navigate based on role
//       if (res.data.role === "admin") {
//         navigate("/admin-dashboard");
//       } else {
//         navigate("/user-dashboard");
//       }

//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Login</h2>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block mb-1 text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function UserLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/users/login", {
//         email,
//         password,
//       });

//       // ✅ Save token to localStorage
//       localStorage.setItem("token", res.data.token);

//       // ✅ Navigate to user dashboard
//       navigate("/user-dashboard");
//     } catch (error) {
//       // ✅ Handle error safely (avoid undefined)
//       const msg =
//         error.response?.data?.message || "Login failed. Please try again.";
//       alert(msg);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
//           User Login
//         </h2>

//         <form onSubmit={handleLogin} className="space-y-4">
//           {/* Email Field */}
//           <div>
//             <label className="block mb-1 text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div>
//             <label className="block mb-1 text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
