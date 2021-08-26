import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Dropdown from "../Dropdown";
import Sections from "./Sections";
import MultiSelectDeleteField from "../MultiSelectDeleteField";

class AddListingFormSection3 extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Sections sectionName={this.props.sectionName} />

        <Form.Group>
          <Form.Label>
            <b>Areas Looking For Help From</b>
          </Form.Label>
          {this.props.areasLookingForHelpFrom.map((i) => (
            <Form.Check label={i} />
          ))}
        </Form.Group>
        <MultiSelectDeleteField
          fieldName="Looking For"
          lookingForHandler={(i) => this.props.lookingForHandler(i)}
          deleteBadge={(i) => this.props.deleteBadge(i)}
          array1={this.props.lookingFor}
          array2={this.props.badgesLookingFor}
        />

        <Form.Group controlId="typeOfProject">
          <Form.Label>
            <b>Type Of Project</b>
          </Form.Label>
          <Dropdown dropdown={this.props.typeOfProject} />
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default AddListingFormSection3;
