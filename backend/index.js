const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dbConnect();


const app = express();

// middleware
app.use(cors({
    origin:"https://16.171.28.236:5173",
    credentials:true
}));
app.use(express.json());



// routes
app.use("/api/auth", authRoutes);

//server 
const PORT = process.env.PORT || 7002;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})