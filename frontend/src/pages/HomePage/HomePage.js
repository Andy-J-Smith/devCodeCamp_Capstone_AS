import React from "react";
import { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Survey from "../../components/Survey/Survey";
import "./HomePage.css";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  const [cart_item, setCartItem] = useState([]);

  useEffect(() => {
    getCartItem();
  }, []);

  async function getCartItem() {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/subscriptions/all/"
    );
    setCartItem(response.data);
    console.log(response.data);
  }
  const filteredItem = cart_item.filter(
    (item) => item.user.username === user.username
  );

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/customers/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCustomers(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCustomer();
  }, [token]);

  return (
    <div className="home-container">
      <Survey className="survey"/>
      <div className="home">
        {customers &&
          customers.map((customer) => (
            <ul className="customer-info" key={customer.id}>
              <label>Account Information</label>
              <hr></hr>
              <li>
                Name: {customer.user.first_name} {customer.user.last_name}
              </li>
              <li>Street: {customer.street_address}</li>
              <li>City: {customer.city}</li>
              <li>State: {customer.state}</li>
              <li>Zip: {customer.zip_code}</li>
              <li>Email: {customer.user.email}</li>
            </ul>
          ))}
      </div>
      <div className="package">
        
        {filteredItem &&
          filteredItem.map((item) => (
            <ul key={item.id}>
              <li>Package: {item.subscription_type}</li>
              <li>Price: {item.price}.00</li>
            </ul>
          ))}
      </div>
      
    </div>
  );
};

export default HomePage;
