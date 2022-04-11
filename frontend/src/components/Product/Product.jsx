import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate, Link } from "react-router-dom";
import './Product.css'

const Product = (props) => {

    const navigate = useNavigate();
  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/tacklebox.jpeg" />
        <Card.Body>
          <Card.Title><h2>Perch Package</h2></Card.Title>
          <Card.Text>
            <li>Hooks</li>
            <li>Sinkers</li>
            <li>Bobbers</li>
            <li>Fishing Line</li>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/checkout")}>Check Out</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/tacklebox.jpeg" />
        <Card.Body>
          <Card.Title><h2>Slab Slayer Package</h2></Card.Title>
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
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/checkout")}>Check Out</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/tacklebox.jpeg" />
        <Card.Body>
          <Card.Title><h2>Sac-a-Lait Package</h2></Card.Title>
          <Card.Text>
            <li>Hooks</li>
            <li>Sinkers</li>
            <li>Bobbers</li>
            <li>Fishing Line</li>
            <li>Jig heads</li>
            <li>Crankbaits</li>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/checkout")}>Check Out</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
