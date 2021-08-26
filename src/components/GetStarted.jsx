import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import GetStartedCard from "./GetStartedCard";

class GetStarted extends Component {
  state = {
    cardTitle: ["Create", "Connect", "Collaborate"],
    cardText: [
      " Create a project, let the right people find and support you.",
      "Connect with the talents around the world.",
      "Collaborate with the people, work on your projects, create a masterpiece.",
    ],
    number: [0, 1, 2],
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">
          Get started today to achieve your dreams!
        </h1>
        <h4 className="text-center text-muted">
          Nearly 80% Of Individuals Doing Projects Are Looking For The Right
          People To Work With
        </h4>
        <br />
        <CardDeck className="row row-cols-1 row-cols-md-4 mx-auto ">
          {" "}
          {this.state.number.map((i) => (
            <GetStartedCard
              cardText={this.state.cardText[i]}
              cardTitle={this.state.cardTitle[i]}
            />
          ))}
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default GetStarted;
