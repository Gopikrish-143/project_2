const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const path = require("path");


dbConnect();


const app = express();

// middleware
app.use(cors({
    origin:"*",
    credentials:true
}));
app.use(express.json());



// routes
app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, "dist")));

// Fallback for React Router (SPA support)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//server 
const PORT = process.env.PORT || 7002;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
