import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class PricingPlansCard extends Component {
  state = {};
  render() {
    return (
      <Card className="text-center" style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title>{this.props.cardTitle}</Card.Title>
          <Card.Text>
            The description of the plan goes here The description of the plan
            goes here
          </Card.Text>
          <Button variant="primary">Select Plan</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default PricingPlansCard;
