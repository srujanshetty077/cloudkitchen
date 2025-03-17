require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ✅ Import Routes
const authRoutes = require("./routes/authRoutes");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const contactRoutes = require("./routes/contactRoutes");

// ✅ Initialize Express App
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", // Allow frontend to access backend
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

// ✅ MongoDB Connection with Improved Error Handling
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log(" MongoDB Connected Successfully"))
.catch(err => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Exit process if database connection fails
});

// ✅ Default Route
app.get("/", (req, res) => {
    res.send(" Welcome to the Soup Kitchen API");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
