import React from "react";
import "./LandingPage.css";
import Survey from "../../components/Survey/Survey";
import poster from '../../Assets/posters.jpg';
import Card from 'react-bootstrap/Card'
import reel from '../../Assets/reel.jpeg'

const LandingPage = (props) => {
  return (
    <div className="hero">
      
      <Card className="hero-card" style={{ width: "50rem", height: "65rem" }}>
        <Card.Body>
          <Card.Title className="hero-title">Fishing Tackle Subscription Service</Card.Title>
          <Card.Text className="hero-card-txt">
            Where Your Fishing Adventure Begins!
          </Card.Text>
          <Card.Img className='hero-card-img'variant="top" src={poster} />

        </Card.Body>
        <Survey/>
      </Card>
    </div>
  );
};

export default LandingPage;
