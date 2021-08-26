import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import FeaturedListingsCard from "./FeaturedListingsCard";

class FeaturedListings extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">Build Your Dreams!</h1>
        <h4 className="text-center text-muted">
          Projects to Explore, Connect & Collaborate With
        </h4>
        <br />
        <CardDeck className="row row-cols-1 row-cols-md-5">
          <FeaturedListingsCard />
          <FeaturedListingsCard />
          <FeaturedListingsCard />
          <FeaturedListingsCard />
          <FeaturedListingsCard />
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default FeaturedListings;
