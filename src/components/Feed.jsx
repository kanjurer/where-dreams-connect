import React, { Component } from "react";
import AdvancedSearch from "./AdvancedSearch";
import Listings from "./Listings";

class Feed extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Listings />
      </React.Fragment>
    );
  }
}

export default Feed;
