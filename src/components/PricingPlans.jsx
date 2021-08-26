import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import PricingPlansCard from "./PricingPlansCard";

class PricingPlans extends Component {
  state = {
    cardTitle: ["Free", "Basic", "Silver", "Gold"],
    number: [0, 1, 2, 3],
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">Choose The Plan That Works For You</h1>
        <h4 className="text-center text-muted">And Connect With Your Dreams</h4>
        <br />
        <CardDeck className="row row-cols-1 row-cols-md-3 mx-auto">
          {this.state.number.map((i) => (
            <PricingPlansCard cardTitle={this.state.cardTitle[i]} />
          ))}
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default PricingPlans;
