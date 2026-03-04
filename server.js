const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// 👇 ADD THIS LINE (Import route)
const hotelRoutes = require("./routes/hotelRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 👇 ADD THIS LINE (Use route)
app.use("/", hotelRoutes);

// Simple test route
app.get("/", (req, res) => {
  res.send("StayCompare Backend is Running 🚀");
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


