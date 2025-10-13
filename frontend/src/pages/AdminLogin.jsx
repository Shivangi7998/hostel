// import React, { useState } from "react";

// const AdminLogin = () => {
//   const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       alert("Please fill all fields.");
//       return;
//     }

//     if (!isLogin && formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     if (isLogin) {
//       // 🔐 Admin Login Logic
//       console.log("Admin Login Data:", formData);
//       alert("Admin logged in successfully!");
//     } else {
//       // 📝 Admin Signup Logic
//       console.log("Admin Signup Data:", formData);
//       alert("Admin account created successfully!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
//         <h2 className="text-2xl font-bold text-center mb-4">
//           {isLogin ? "Admin Login" : "Admin Signup"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter admin email"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter password"
//               required
//             />
//           </div>

//           {/* Confirm Password (only for signup) */}
//           {!isLogin && (
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Confirm password"
//                 required
//               />
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             {isLogin ? "Login" : "Signup"}
//           </button>
//         </form>

//         {/* Toggle Link */}
//         <p className="text-center text-gray-600 mt-4">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             type="button"
//             className="text-blue-600 font-semibold hover:underline"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? "Sign up here" : "Login here"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;






import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", { username, password });
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin-dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
