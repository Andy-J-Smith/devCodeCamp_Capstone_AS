import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup'
import { useNavigate, Link } from "react-router-dom";
import "./Product.css";
import axios from "axios";

import fish2 from "../../Assets/bluefish1.jpg";
import fish3 from "../../Assets/fish3.jpg";
import fish4 from "../../Assets/fish4.jpg";
import Alert from "react-bootstrap/Alert";

import {GiFishing} from 'react-icons/gi'


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
   
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    // <div className="product-container">
    //   <Card className="good" style={{ width: "20rem" }}>
    //     <Card.Img className="image" variant="top" src={fish2} />
    //     <Card.Body>
    //       <Card.Title>
    //         <h2>Perch Package</h2>
    //       </Card.Title>
    //       <Card.Text>
    //         <li>Hooks</li>
    //         <li>Sinkers</li>
    //         <li>Bobbers</li>
    //         <li>Fishing Line</li>
    //         <li>$25.00</li>
    //       </Card.Text>
    //       <Button onClick={() => createGood()}>Add to Cart</Button>
    //       <Button onClick={() => navigate("/product-detail")}>More Info</Button>
    //     </Card.Body>
    //   </Card>
    //   <div className="slab-slayer">
    //     <Card className="best" style={{ width: "25rem", height: "50rem" }}>
    //       <Card.Img className="image" variant="top" src={fish3} />
    //       <Card.Body>
    //         <Card.Title>
    //           <h2 className="title-best">Slab Slayer Package</h2>
    //         </Card.Title>

    //         <Card.Text>
    //           <li>Hooks</li>
    //           <li>Sinkers</li>
    //           <li>Bobbers</li>
    //           <li>Fishing Line</li>
    //           <li>Jig heads</li>
    //           <li>Crankbaits</li>
    //           <li>Spider rig asscessories</li>
    //           <li>Scent</li>
    //           <li>Jig Bodies</li>
    //           <li>$45.00</li>
    //         </Card.Text>
    //         <Button onClick={() => createBest()}>Add to Cart</Button>
    //         <Button onClick={() => navigate("/product-detail")}>More Info</Button>
    //       </Card.Body>
    //     </Card>
    //   </div>
    //   <Card className="better" style={{ width: "20rem" }}>
    //     <Card.Img className="image" variant="top" src={fish4} />
    //     <Card.Body>
    //       <Card.Title>
    //         <h2>Sac-a-Lait Package</h2>
    //       </Card.Title>
    //       <Card.Text>
    //         <li>Hooks</li>
    //         <li>Sinkers</li>
    //         <li>Bobbers</li>
    //         <li>Fishing Line</li>
    //         <li>Jig heads</li>
    //         <li>Crankbaits</li>
    //         <li>$35.00</li>
    //       </Card.Text>
    //       <Button onClick={() => createBetter()}>Add to Cart</Button>
    //       <Button onClick={() => navigate("/product-detail")}>More Info</Button>
    //     </Card.Body>
    //   </Card>
    // </div>

<div className="detail-container">
<Card className="fish" style={{ width: "30rem" }}>
  <Card.Img variant="top" src={fish2} />
  <Card.Body>
    <Card.Title className="perch">Perch Package</Card.Title>
    <Card.Text>
      Each month you will receive a variety of high-quality fishing
      tackles. We have a team of industry experts and professional anglers
      that approve the products we put in each box. Each Bigbee Slab
      Tackle Box contains approximately $35-$85 worth of fishing tackle,
      depending on which box size you choose. 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
      <GiFishing />
      5-7 CURATED PRODUCTS (baits & accessories)
    </ListGroupItem>

    <ListGroupItem>
      <GiFishing />
      APPROX. $35 RETAIL VALUE
    </ListGroupItem>
    <ListGroupItem>
      <GiFishing />
      PAUSE, OR CANCEL AT ANYTIME
    </ListGroupItem>
    <ListGroupItem>
      <GiFishing />
      FREE SHIPPING IN THE USA
    </ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Button onClick={() => createGood()}>Add to Cart</Button>
  <Card.Link href="http://localhost:3000/product-detail">
      More Info
    </Card.Link>
  </Card.Body>
</Card>

<Card className="fish" style={{ width: "30rem" }}>
  <Card.Img variant="top" src={fish3} />
  <Card.Body>
    <Card.Title className="perch">Slab Slayer Package</Card.Title>
    <Card.Text>
      Each month you will receive a variety of high-quality fishing
      tackles. We have a team of industry experts and professional anglers
      that approve the products we put in each box. Each Bigbee Slab
      Tackle Box contains approximately $35-$85 worth of fishing tackle,
      depending on which box size you choose. 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
      <GiFishing />
      9-12 CURATED PRODUCTS (baits & accessories)
    </ListGroupItem>

    <ListGroupItem>
      <GiFishing />
      APPROX. $85 RETAIL VALUE
    </ListGroupItem>
    <ListGroupItem>
      <GiFishing />
      PAUSE, OR CANCEL AT ANYTIME
    </ListGroupItem>
    <ListGroupItem>
      <GiFishing />
      FREE SHIPPING IN THE USA
    </ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Button onClick={() => createBest()}>Add to Cart</Button>
  <Card.Link href="http://localhost:3000/product-detail">
      More Info
    </Card.Link>
  </Card.Body>
</Card>
<Card className="fish" style={{ width: "30rem" }}>
  <Card.Img variant="top" src={fish4} />
  <Card.Body>
    <Card.Title className="perch">Sac-a-Lait Package</Card.Title>
    <Card.Text>
      Each month you will receive a variety of high-quality fishing
      tackles. We have a team of industry experts and professional anglers
      that approve the products we put in each box. Each Bigbee Slab
      Tackle Box contains approximately $35-$85 worth of fishing tackle,
      depending on which box size you choose. 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
      <GiFishing />
      7-9 CURATED PRODUCTS (baits & accessories)
    </ListGroupItem>

    <ListGroupItem>
      <GiFishing />
      APPROX. $55 RETAIL VALUE
    </ListGroupItem>
    <ListGroupItem>
      <GiFishing />
      PAUSE, OR CANCEL AT ANYTIME
    </ListGroupItem>
    <ListGroupItem>
      <GiFishing />
      FREE SHIPPING IN THE USA
    </ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Button onClick={() => createBetter()}>Add to Cart</Button>
    <Card.Link href="http://localhost:3000/product-detail">
      More Info
    </Card.Link>
  </Card.Body>
</Card>
</div>
  );
};

export default Product;
