import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Homepage";
import Product from "./components/Product";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

      {/* // protected  */}
        <Route path="/Home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path="/product" element={<ProtectedRoute> <Product /> </ProtectedRoute>} />
      </Routes>
    </Router>
  );
}
