import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import featuredImage from "./images/website-cost.jpg";

class ListingCard extends Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={featuredImage} />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
          <Card.Text>
            Project description goes here. Describe your project in 30 words or
            less.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <span>
            <Badge variant="info">Location</Badge>
          </span>
        </Card.Footer>
      </Card>
    );
  }
}

export default ListingCard;
