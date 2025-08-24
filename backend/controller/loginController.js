
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const register = async(req,res) =>{
    try {

const {username,password,role} = req.body;
const hashedPassword = await bcrypt.hash(password,10);

const newUser = new User({username:username.toLowerCase(),password:hashedPassword,role})

await newUser.save();

res.status(201).json({message:`User registered with username ${username}`})



    } catch (error) {


        console.log(error);
        res.status(500).json({message:"something went wrong"});

};  
}

const login = async(req,res) => {

    try {
        
const {username,password} = req.body;

const existedUser = await User.findOne({username:username.toLowerCase()})
if(!existedUser){

    return res.status(404).json({message:"user not found"})
}
   const isMatch = await  bcrypt.compare(password,existedUser.password);    
   if(!isMatch){
     return  res.status(401).json({message:"invalid cerdentials"});
    
   }
   const token = jwt.sign(
    {id:existedUser._id,username:existedUser.username,role:existedUser.role},
    process.env.JWT_SECRET,
    {expiresIn:"1h"}
   );

res.status(200).json({token,role:existedUser.role})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"});
        
    }


};

module.exports={
    register,
    login,
}