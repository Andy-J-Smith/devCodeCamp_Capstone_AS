import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import "./Survey.css";

import useAuth from "../../hooks/useAuth";

import axios from "axios";

import swal from "sweetalert";

const Survey2 = () => {
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
      swal("Survey Submitted", "Thank You!", "success");
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleSurvey(event) {
    event.preventDefault();
    let newSurvey = {
      species: species,
    
    };
    console.log(newSurvey);
    createSurvey(newSurvey);
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
                <label>
                {"Crappie"}
                  <input
                    className="survey-input"
                    type="radio"

                    checked={survey.species === "Crappie"}
                    value="Crappie"
                    onChange={(event) => setSpecies(event.target.value)}
                  />
                </label>
                <label>
                  {"Bass "}
                  <input
                    className="survey-input"
                    type="radio"
                    
                    checked={survey.species === "Bass"}
                    value="Bass"
                    onChange={(event) => setSpecies(event.target.value)}
                  />
                </label>
                <label>
                  {"Catfish"}
                  <input
                    className="survey-input"
                    type="radio"
                    
                    checked={survey.species === "Catfish"}
                    value="Catfish"
                    onChange={(event) => setSpecies(event.target.value)}
                  />
                </label>

               
                <button type="submit" onClick={handleClose}>
                  Submit Survey
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Survey2;
