import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import "./Product.css";
import Badge from "react-bootstrap/Badge";
import axios from "axios";



const Product = (props) => {
  const navigate = useNavigate();
  const [good, setGood] = useState('')
  const [better, setBetter] = useState('')
  const [best, setBest] = useState('')
  const [user, token] = useAuth();




  async function createGood(newGood) {
    
    try {
      const perch = { 
      user: user,
      slug: 'perch_package',
      subscription_type: 'Perch Package',
      price: '25',
      stripe_plan_id: 'price_1KlIuyJ09XIAoeJuCA29eUSZ'};
      
      const headers = {'Authorization': 'Bearer ' + token};
      let response = await axios.post(
        "http://127.0.0.1:8000/api/subscriptions/",
        perch, {headers}
   
      );
      setGood(newGood);
      alert('Thank you for selecting the Perch package! Click the checkout button to proceed');
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createBetter(newBetter) {
    
    try {
      const sac_a_lait = { 
    
      slug: 'sac-a-lait',
      subscription_type: 'Sac-a-Lait Package',
      price: '35',
      stripe_plan_id: 'price_1KlIuyJ09XIAoeJuCA29eUSZ'};
      
      const headers = {'Authorization': 'Bearer ' + token};
      let response = await axios.post(
        "http://127.0.0.1:8000/api/subscriptions/",
        sac_a_lait, {headers}
   
      );
      setBetter(newBetter);
      alert('Thank you for selecting the Sac-a-lait package! Click the checkout button to proceed');
      console.log(user.username)
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createBest(newBest) {
    
    try {
      const slab_slayer = { 
      user: user,  
      slug: 'slab_slayer',
      subscription_type: 'Slab Slayer Package',
      price: '45',
      stripe_plan_id: 'price_1KlIuyJ09XIAoeJuCA29eUSZ'};
      
      const headers = {'Authorization': 'Bearer ' + token};
      let response = await axios.post(
        "http://127.0.0.1:8000/api/subscriptions/",
        slab_slayer, {headers}
   
      );
      setBest(newBest);
      alert('Thank you for selecting the Slab Slayer package! Click the checkout button to proceed');
    } catch (error) {
      console.log(error.message);
    }
  }
  
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
            <li>$25.00</li>
          </Card.Text>
          <Button onClick= {()=> createGood()}>Add to Cart</Button>
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
              <li>$45.00</li>
            </Card.Text>
            <Button onClick= {()=> createBest()}>Add to Cart</Button>
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
            <li>$35.00</li>
          </Card.Text>
          <Button onClick= {()=> createBetter()}>Add to Cart</Button>
          <Button variant="primary" onClick={() => navigate("/checkout")}>
            Check Out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
