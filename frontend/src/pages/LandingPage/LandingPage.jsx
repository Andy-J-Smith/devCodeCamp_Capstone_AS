import React from "react";
import "./LandingPage.css";
import Survey from "../../components/Survey/Survey";
import poster from '../../Assets/posters.jpg';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/esm/Button";

const LandingPage = (props) => {
  return (
    <div className="hero">
      
      <Card className="hero-card" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={poster} />
        <Card.Body>
          <Card.Title className="hero-title">Fishing Tackle Subscription Service</Card.Title>
          <Card.Text className="hero-card-txt">
            Where Your Fishing Adventure Begins!
          </Card.Text>
          <Button variant="primary">Video</Button>
        </Card.Body>
        <Survey/>
      </Card>
    </div>
  );
};

export default LandingPage;
