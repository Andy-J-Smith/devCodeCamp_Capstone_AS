import React from "react";
import { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import fish from "../../Assets/fish.jpeg";
import ListGroup from "react-bootstrap/ListGroup";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Survey from "../../components/Survey/Survey";
import "./HomePage.css";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Billing from "../../components/AccountInfo/Billing";

const HomePage = (props) => {
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
    //^filters over the cart items(subscriptions) and returns only the data that belongs to the logged in user
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

  const salesTotal = filteredItem.reduce(
    (total, currentValue) => (total = total + currentValue.price),
    0
  ); //^totals the price of the subscriptions. The filtered list from the axios request is passed into this so it only returns the total for the logged in user

  return (
    <div className="home-container">
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src={fish} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
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
                    <li>State: {customer.st}</li>
                    <li>Zip: {customer.zip_code}</li>
                    <li>Email: {customer.user.email}</li>
                  </ul>
                ))}
            </div>
          </Card.Text>
          
        </Card.Body>
      </Card>
      <AccountInfo/>
      <Billing/>

      <div className="package">
        <label>Purchase History</label>
        <hr></hr>
        {filteredItem &&
          filteredItem.map((item) => (
            <ul key={item.id}>
              <li>Package: {item.subscription_type}</li>
              <li>Price: $ {item.price}.00</li>
            </ul>
          ))}
        <ul>
          <h3>Monthly Total: $ {salesTotal}.00</h3>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
