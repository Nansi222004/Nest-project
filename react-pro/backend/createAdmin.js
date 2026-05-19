// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import dotenv from "dotenv";
// import User from "./models/User.js";

// dotenv.config();

// const createAdmin = async () => {
//   try {
//     console.log("Connecting to DB...");
    
//     await mongoose.connect(process.env.MONGO_URL);
    
//     console.log("DB connected ✅");

//     const existingAdmin = await User.findOne({ email: "admin@gmail.com" });

//     if (existingAdmin) {
//       console.log("Admin already exists ❌");
//       process.exit();
//     }

//     const hashedPassword = await bcrypt.hash("admin123", 10);

//     const admin = new User({
//       username: "admin",
//       email: "admin@gmail.com",
//       password: hashedPassword,
//       role: "admin",
//     });

//     await admin.save();

//     console.log("Admin created ✅");

//     process.exit();
//   } catch (err) {
//     console.log("ERROR:", err.message);
//     process.exit(1);
//   }
// };

// createAdmin();