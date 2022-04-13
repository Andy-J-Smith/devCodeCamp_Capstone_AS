import React, {useState} from "react";
import Chart from "react-google-charts";

const SalesChart = (props) => {


  function generateChartData() {
    let filteredPackages = props.cart_item.filter((item) => item.price >= 25);

    let packages = filteredPackages.map((item) => {
      return item.subscription_type;
    });
    console.log("packages: ", packages);

    let distinctPackages = [...new Set(packages)];
    console.log(distinctPackages);

    let packageArrays = distinctPackages.map((item) => {
      let allItemsForPackages = filteredPackages.filter(
        (e) => e.subscription_type === item
      );
      let totalSales = allItemsForPackages.reduce(function (sum, current) {
        return sum + current.price;
      }, 0);
      console.log(totalSales);

      return [item, totalSales, "silver"];
    });
    console.log("Package Array", packageArrays);

    const data = [["Package", "Sales", { role: "style" }], ...packageArrays];

    return data;
  }

  return (
    <div>
      {" "}
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        </style>
        <h1>Sales by Packages</h1>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={generateChartData()}
        />
      </div>
      
    </div>
  );
};

export default SalesChart;
