import dotenv from "dotenv";
dotenv.config();


import express from 'express';
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());


app.use("/uploads", express.static("uploads"));


connectDB();
const PORT = process.env.PORT;

app.use("/api/auth", userRoutes);
app.use("/api/products", productRoutes);
// app.use("/admin", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` );
});