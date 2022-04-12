import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import "./Product.css";
import Badge from "react-bootstrap/Badge";

const Product = (props) => {
  const navigate = useNavigate();
  return (
    <div className="product-container">
      <Card className="good" style={{ width: "20rem" }}>
        <Card.Img
          className="image"
          variant="top"
          src="https://media.istockphoto.com/photos/fishing-equipment-picture-id625780716?b=1&k=20&m=625780716&s=170667a&w=0&h=BVX_Ii6OsENxtQGRlIY84GhDwhOYGPQ3GUYq08bdy7E="
        />
        <Card.Body>
          <Card.Title>
            <h2>Perch Package</h2>
          </Card.Title>
          <Card.Text>
            <li>Hooks</li>
            <li>Sinkers</li>
            <li>Bobbers</li>
            <li>Fishing Line</li>
            <p>$25.00</p>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/checkout")}>
            Check Out
          </Button>
        </Card.Body>
      </Card>
      <div className="slab-slayer">
        <Card className="best" style={{ width: "20rem" }}>
          <Card.Img
            className="image"
            variant="top"
            src="https://media.istockphoto.com/photos/fishing-lures-in-tackle-boxes-with-spinning-rod-and-net-picture-id471194270?b=1&k=20&m=471194270&s=170667a&w=0&h=WYYIxubGRHfy5StOmPpn8Y7mQckqlr3G3eMPtfIcpyY="
          />
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
              <p>$45.00</p>
            </Card.Text>
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
          src="https://images.unsplash.com/photo-1611110176776-ea2a9ba5d376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaGluZyUyMHRhY2tsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
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
            <p>$35.00</p>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/checkout")}>
            Check Out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
