import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import Image from "./images/getstarted.png";

class GetStartedCard extends Component {
  state = {};
  render() {
    return (
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>{this.props.cardTitle}</Card.Title>
            <Card.Text>{this.props.cardText}</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  }
}

export default GetStartedCard;
