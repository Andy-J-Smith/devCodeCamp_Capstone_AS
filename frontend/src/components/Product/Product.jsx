import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import "./Product.css";
import axios from "axios";

import fish2 from "../../Assets/bluefish1.jpg"
import fish3 from "../../Assets/fish3.jpg"
import fish4 from "../../Assets/fish4.jpg"
import Alert from "react-bootstrap/Alert"

const Product = (props) => {
  const navigate = useNavigate();
  const [good, setGood] = useState("");
  const [better, setBetter] = useState("");
  const [best, setBest] = useState("");
  const [user, token] = useAuth();

  async function createGood(newGood) {
    try {
      const perch = {
        slug: "perch_package",
        subscription_type: "Perch Package",
        price: "25",
        stripe_plan_id: "price_1KlIuyJ09XIAoeJuCA29eUSZ",
      };

      const headers = { Authorization: "Bearer " + token };
      let response = await axios.post(
        "http://127.0.0.1:8000/api/subscriptions/",
        perch,
        { headers }
      );
      setGood(newGood);
      alert(
        "Thank you for selecting the Perch package! Click the checkout button to proceed"
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createBetter(newBetter) {
    try {
      const sac_a_lait = {
        slug: "sac-a-lait",
        subscription_type: "Sac-a-Lait Package",
        price: "35",
        stripe_plan_id: "price_1KlIuyJ09XIAoeJuCA29eUSZ",
      };

      const headers = { Authorization: "Bearer " + token };
      let response = await axios.post(
        "http://127.0.0.1:8000/api/subscriptions/",
        sac_a_lait,
        { headers }
      );
      setBetter(newBetter);
      alert(
        "Thank you for selecting the Sac-a-lait package! Click the checkout button to proceed"
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createBest(newBest) {
    try {
      const slab_slayer = {
        slug: "slab_slayer",
        subscription_type: "Slab Slayer Package",
        price: "45",
        stripe_plan_id: "price_1KlIuyJ09XIAoeJuCA29eUSZ",
      };

      const headers = { Authorization: "Bearer " + token };
      let response = await axios.post(
        "http://127.0.0.1:8000/api/subscriptions/",
        slab_slayer,
        { headers }
      );
      setBest(newBest);
      alert(
        "Thank you for selecting the Slab Slayer package! Click the checkout button to proceed"
      );
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className="product-container">
      <Card className="good" style={{ width: "20rem" }}>
        <Card.Img className="image" variant="top" src={fish2} />
        <Card.Body>
          <Card.Title>
            <h2>Perch Package</h2>
          </Card.Title>
          <Card.Text>
            <li>Hooks</li>
            <li>Sinkers</li>
            <li>Bobbers</li>
            <li>Fishing Line</li>
            <li>$25.00</li>
          </Card.Text>
          <Button onClick={() => createGood()}>Add to Cart</Button>
          <Button variant="primary" onClick={() => navigate("/checkout")}>
            Check Out
          </Button>
        </Card.Body>
      </Card>
      <div className="slab-slayer">
        <Card className="best" style={{ width: "25rem",  height: "50rem" }}>
          <Card.Img className="image" variant="top" src={fish3} />
          <Card.Body>
            <Card.Title>
              <h2 className="title-best">Slab Slayer Package</h2>
            </Card.Title>

            <Card.Text>
              <li>Hooks</li>
              <li>Sinkers</li>
              <li>Bobbers</li>
              <li>Fishing Line</li>
              <li>Jig heads</li>
              <li>Crankbaits</li>
              <li>Spider rig asscessories</li>
              <li>Scent</li>
              <li>Jig Bodies</li>
              <li>$45.00</li>
            </Card.Text>
            <Button onClick={() => createBest()}>Add to Cart</Button>
            <Button
              className="tittle-best"
              variant="primary"
              onClick={() => navigate("/checkout")}
            >
              Check Out
            </Button>
          </Card.Body>
        </Card>
      </div>
      <Card className="better" style={{ width: "20rem" }}>
        <Card.Img
          className="image"
          variant="top"
          src={fish4}
        />
        <Card.Body>
          <Card.Title>
            <h2>Sac-a-Lait Package</h2>
          </Card.Title>
          <Card.Text>
            <li>Hooks</li>
            <li>Sinkers</li>
            <li>Bobbers</li>
            <li>Fishing Line</li>
            <li>Jig heads</li>
            <li>Crankbaits</li>
            <li>$35.00</li>
          </Card.Text>
          <Button onClick={() => createBetter()}>Add to Cart</Button>
          <Button variant="primary" onClick={() => navigate("/checkout")}>
            Check Out
          </Button>
        </Card.Body>
      </Card>
    
    </div>
  );
};

export default Product;
