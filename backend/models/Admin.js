import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
});

// adminSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// export default mongoose.model("Admin", adminSchema);

const Admin = mongoose.model("Admin", adminSchema); 
export default Admin;