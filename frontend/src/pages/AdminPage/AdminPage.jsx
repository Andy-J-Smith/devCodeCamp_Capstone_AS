import React, { useState, useEffect } from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import Survey from "../../components/Survey/Survey";
import "./AdminPage.css";
import useAuth from "../../hooks/useAuth";
import { Chart } from "react-google-charts";
import SurveyChart from "../../components/SurveyChart/SurveyChart";
import SalesChart from "../../components/SalesChart/SalesChart";

const AdminPage = (props) => {
  const [survey, setSurvey] = useState("");
  const [cart_item, setCartItem] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getCartItem();
  }, []);

  async function getCartItem() {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/subscriptions/all/"
    );
    setCartItem(response.data);
  }

  const salesTotal = cart_item.reduce(
    (total, currentValue) => (total = total + currentValue.price),
    0
  );
  console.log(salesTotal);

  return (
    <div className="container-admin">
      <p className="admin-title">Sales List</p>
      <table className="table-admin">
        <thead className="admin-hd">
          <tr className="admin-h">
            <th>User</th>
            <th>Package</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="table-admin-body">
          {cart_item &&
            cart_item.map((cart_item, index) => {
              return (
                <tr className="admin-h" key={index}>
                  <td className="admin-row">{cart_item.user.username}</td>
                  <td className="admin-row">{cart_item.subscription_type}</td>
                  <td className="admin-row"> $ {cart_item.price}.00</td>
                </tr>
              );
            })}
          <hr />
          <td>
            <h2>Total Sales: $ {salesTotal}.00</h2>
          </td>
        </tbody>
      </table>
      {/* <div className="survey">
        <SurveyChart cart_item={cart_item} />
      </div> */}
      <div className="sales">
        <SalesChart cart_item={cart_item} />
      </div>
    </div>
  );
};

export default AdminPage;
