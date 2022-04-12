import React, { useState, useEffect } from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import Survey from "../../components/Survey/Survey";
import "./AdminPage.css";
import useAuth from "../../hooks/useAuth";
import { Chart } from "react-google-charts";


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
  }
  function generateChartData(){

  let filteredPackages = cart_item.filter(item => item.price >= 25);

  let packages = filteredPackages.map(item => {
    return item.subscription_type;
  });
  console.log('packages: ', packages)

 let distinctPackages = [...new Set(packages)]
console.log(distinctPackages)

let packageArrays = distinctPackages.map(item => {
  let allItemsForPackages = filteredPackages.filter(e => e.subscription_type === item);
  let totalSales = allItemsForPackages.reduce(function(sum, current){
    return sum + current.price;
  },0)
  console.log(totalSales)

  return [item, totalSales, 'silver']
})
console.log('Package Array', packageArrays)

const data = [[
  "Package", "Sales", {role: "style"}
],...packageArrays];

return data;
  }

  return (
    <div className="container">
       <div>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          </style>
         <h1>Sales by Packages</h1>
         <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />
       
      </div>
      <p>Sales List</p>
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
