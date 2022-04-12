import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import "./Survey.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

const Survey = (props) => {
  const [species, setSpecies] = useState("");
  const [style, setStyle] = useState("");
  const [frequency, setFrequency] = useState("");
  const [water_type, setWaterType] = useState("");
  const [boat_land, setBoatLand] = useState("");
  const [survey, setSurvey] = useState("");
  const [user, token] = useAuth();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    alert("Thank you for submitting the survey!");
  }

  return (
    <div>
      <div className="survey-modal">
        <Button variant="primary" onClick={handleShow}>
          Fill out Survey
        </Button>
      <div className="modal-container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Close</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <form className="survey-form" onSubmit={handleSurvey}>
              <label>Tell us what type of fish you target:</label>
              <input className="survey-input"
                type="text"
                placeholder="species"
                value={handleSurvey.species}
                onChange={(event) => setSpecies(event.target.value)}
              />
              <label>Input type of fishing, live bait or artificial:</label>
              <input className="survey-input"
                type="text"
                placeholder="style"
                value={handleSurvey.style}
                onChange={(event) => setStyle(event.target.value)}
              />
              <label>How often do you fish? weekly/monthly:</label>
              <input className="survey-input"
                type="text"
                placeholder="frequency"
                value={handleSurvey.frequency}
                onChange={(event) => setFrequency(event.target.value)}
              />
              <label>
                Do you fish rivers, lakes, ocean, ponds, creeks, or other:
              </label>
              <input className="survey-input"
                type="text"
                placeholder="water_type"
                value={handleSurvey.water_type}
                onChange={(event) => setWaterType(event.target.value)}
              />
              <label>Tell us how you fish, boat or from land:</label>
              <input className="survey-input"
                type="text"
                placeholder="boat_land"
                value={handleSurvey.boat_land}
                onChange={(event) => setBoatLand(event.target.value)}
              />
              <button type="submit"onClick={handleClose}>Submit Survey </button>
            </form>
          </Modal.Body>
       
        </Modal>
        </div>
      </div>

    </div>
  );
};

export default Survey;


