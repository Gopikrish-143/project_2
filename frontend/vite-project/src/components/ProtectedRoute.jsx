import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const userAuth = localStorage.getItem("isLoggedIn"); 

  return userAuth ? children : <Navigate to ="/" />;
}
