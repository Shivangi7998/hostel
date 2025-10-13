// backend/index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();  // ✅ Load env variables first

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use("/api/users", userRoutes);  
app.use("/api/admin", adminRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
