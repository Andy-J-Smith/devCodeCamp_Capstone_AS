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

//stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import InjectedCheckoutForm from "./components/InjectedCheckoutForm/InjectedCheckoutForm";


const stripePromise = loadStripe('pk_test_51KlIfWJ09XIAoeJupGMpaF7KTJKTIshrlouOOmwjFJ2S52vKIiHv98vMELWzh6RTWuhFLYTsWyUK3U7cAnomp51K00ilYgZnN9')

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
            <PrivateRoute>
              <HomePage />
              <Elements stripe={stripePromise}>
      <InjectedCheckoutForm />
    </Elements>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
