import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import "./Survey.css";

const Survey = (props) => {
  const [species, setSpecies] = useState("");
  const [style, setStyle] = useState("");
  const [frequency, setFrequency] = useState("");
  const [water_type, setWaterType] = useState("");
  const [boat_land, setBoatLand] = useState("");
  const [survey, setSurvey] = useState("");
  const [user, token] = useAuth();

  async function createSurvey(newSurvey) {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/surveys/new/",
        newSurvey,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setSurvey(newSurvey);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleSurvey(event) {
    event.preventDefault();
    let newSurvey = {
      species: species,
      style: style,
      frequency: frequency,
      water_type: water_type,
      boat_land: boat_land,
    };
    console.log(newSurvey);
    createSurvey(newSurvey);
  }

  return (
    <div>
      <div className="container">
        Please fill out the below Survey
        <form className="form" onSubmit={handleSurvey}>
          <label>Tell us what type of fish you target:</label>
          <input
            type="text"
            placeholder="species"
            value={handleSurvey.species}
            onChange={(event) => setSpecies(event.target.value)}
          />
          <label>Input type of fishing, live bait or artificial:</label>
          <input
            type="text"
            placeholder="style"
            value={handleSurvey.style}
            onChange={(event) => setStyle(event.target.value)}
          />
          <label>How often do you fish? weekly/monthly:</label>
          <input
            type="text"
            placeholder="frequency"
            value={handleSurvey.frequency}
            onChange={(event) => setFrequency(event.target.value)}
          />
          <label>
            Do you fish rivers, lakes, ocean, ponds, creeks, or other:
          </label>
          <input
            type="text"
            placeholder="water_type"
            value={handleSurvey.water_type}
            onChange={(event) => setWaterType(event.target.value)}
          />
          <label>Tell us how you fish, boat or from land:</label>
          <input
            type="text"
            placeholder="boat_land"
            value={handleSurvey.boat_land}
            onChange={(event) => setBoatLand(event.target.value)}
          />
          <button type="submit">Submit Survey</button>
        </form>
      </div>
    </div>
  );
};

export default Survey;
