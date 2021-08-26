import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import SearchBox from "./SearchBox";
import "./JumbotronArea.css";

class JumbotronArea extends Component {
  state = {};
  render() {
    return (
      <Jumbotron fluid className="JumbotronArea">
        <Container>
          <h1 className="text-white font-weight-bold display-4 title">
            Explore The Dream Directory
          </h1>
          <h3 className="text-white">
            Just looking around? Let us show you some hot & happening projects!
          </h3>
          <SearchBox />
        </Container>
      </Jumbotron>
    );
  }
}

export default JumbotronArea;
