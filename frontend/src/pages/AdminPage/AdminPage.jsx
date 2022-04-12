import React, { useState, useEffect } from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import Survey from "../../components/Survey/Survey";
import "./AdminPage.css";
import useAuth from "../../hooks/useAuth";


const AdminPage = (props) => {
  const [survey, setSurvey] = useState("");
  const [cart_item, setCartItem] = useState([]);
  const [user, token] = useAuth();

  // useEffect(() => {
  //   getAllSurveys();
  // }, []);

  // async function getAllSurveys() {
  //   let response = await axios.get("http://127.0.0.1:8000/api/surveys/");
  //   setSurvey(response.data);
  //   console.log(response.data);
  // }


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


  return (
    <div className="container">
      <p>Admin Page</p>
      <table className="table">
        <thead>
          <tr>
            <th>User</th>
            <th>Package</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart_item &&
            cart_item.map((cart_item, index) => {
              return (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{cart_item.subscription_type}</td>
                  <td>{cart_item.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
