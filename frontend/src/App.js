// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

//stripe

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
           <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/product" element={<ProductsPage/>}/>
        <Route path="/product-detail" element={<ProductDetail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
