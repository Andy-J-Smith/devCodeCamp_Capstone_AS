import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

import logo from '../../Assets/manfish.jpeg'
import { GiFishing } from "react-icons/gi";

import "./ProductDetail.css";

const ProductDetail = (props) => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div class="grid-container">
        <header>
            <h1>Product Detail</h1>
        </header>
    <main>
        <p>
        Each month you will receive a variety of high-quality fishing
            tackles. We have a team of industry experts and professional anglers
            that approve the products we put in each box. Each Bigbee Slab
            Tackle Box contains approximately $35-$85 worth of fishing tackle,
            depending on which box size you choose.
        </p>
        <p>
            We take pride in knowing that we provide you with the best fishing tackle
            options available. We stand behind ALL of our products. 100 percent money back
            guarantee!
        </p>
        
    </main>
    <div className="mid-right"></div>
    
 
   
    <div class="picture"></div>
  </div>
  );
};

export default ProductDetail;
