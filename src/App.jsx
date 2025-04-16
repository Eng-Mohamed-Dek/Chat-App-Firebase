import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SomChat from "./pages/SomChat";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  // Authentication 
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
          {/* pages route  */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth  */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* chatApp */}
          <Route path="/SomChat" element={ <ProtectedRoute><SomChat /></ProtectedRoute>} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
