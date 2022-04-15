import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import axios from "axios";

const SurveyChart = (props) => {
  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    getAllSurveys();
  }, []);

  async function getAllSurveys() {
    let response = await axios.get("http://127.0.0.1:8000/api/surveys/");
    setSurvey(response.data);
    console.log(response.data);
  }
  function generateChartData() {
    const style = survey.map((item) => {
      return item.style;
    });
    console.log("style", style);

    let distStyles = [...new Set(style)];
    console.log(distStyles);

    let styleArray = distStyles.map((item) => {
      const count = [];
      for (const el of style) {
        if (count[el]) {
          count[el] += 1;
        } else {
          count[el] = 1;
        }
      }
      console.log("count", count);

      return ["style", count.live, count.artificial, "red"];
    });

    const data = [
      ["style", "Live Bait", "Artificial Bait", { role: "style" }],
      ...styleArray,
    ];
    console.log(styleArray);
    return data;
  }
  return (
    <div>
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        </style>
        <h1>Fishing Style Survey</h1>
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

export default SurveyChart;
