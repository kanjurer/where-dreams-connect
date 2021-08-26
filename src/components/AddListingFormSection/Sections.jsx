import React, { Component } from "react";

class Sections extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>{this.props.sectionName} </h4>

        <hr />
      </div>
    );
  }
}

export default Sections;
