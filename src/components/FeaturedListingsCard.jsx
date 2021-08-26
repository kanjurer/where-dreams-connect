import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import FeaturedImage from "./images/fimage.jpg";

class FeaturedListingsCard extends Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={FeaturedImage} />
        <Card.Body>
          <Card.Title>Featured Listing</Card.Title>
          <Card.Text>
            The description of the featured listing goes here!
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default FeaturedListingsCard;
