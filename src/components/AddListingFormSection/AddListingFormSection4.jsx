import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Sections from "./Sections";

class AddListingFormSection4 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sections sectionName={this.props.sectionName} />

        <Form.Group controlId="City">
          <Form.Label>
            <b>City</b>
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="website">
          <Form.Label>
            <b>Website</b>
          </Form.Label>
          <Form.Control type="url" />
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default AddListingFormSection4;
