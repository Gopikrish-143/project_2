const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dbConnect();


const app = express();

// middleware
app.use(cors({
    origin: [
    "http://16.171.28.236:3000",  // if opening frontend from EC2
    "https://project-2-flame-omega.vercel.app"  // if opening from Vercel
  ],
  credentials: true
}));
app.use(express.json());



// routes
app.use("/api/auth", authRoutes);

//server 
const PORT = process.env.PORT || 7002;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
