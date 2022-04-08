import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Survey from "../../components/Survey/Survey";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [customers, setCustomers] = useState([]);
  console.log(user);

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
    <div className="container">
      <h1>Home Page for {user.first_name} {user.last_name}!</h1>   //^last_name and email are undefined
      {customers &&
        customers.map((customer) => (
          <p key={customer.id}>
            {customer.country} {customer.street_address} {customer.city}
          </p>
        ))}
        <Survey/>
    </div>
  );
};

export default HomePage;
