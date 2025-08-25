import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify';

const LoginPage = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/`, {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role); 
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", res.data.username || username);
      toast.success('Login successful')

      navigate("/Home"); 

    } catch (err) {
      console.error("message",err.message);
      toast.error("Invalid username or password");
    }
  };

  return (
  <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white p-4 shadow-sm rounded-xl max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-1/3 mx-27  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-xl "
          >
            Login
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
