import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Sections from "./Sections";

class AddListingFormSection2 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sections sectionName={this.props.sectionName} />

        <Form.Group controlId="description">
          <Form.Label>
            <b>Description</b>
          </Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="tagsOrKeywords">
          <Form.Label>
            <b>Tags Or Keywords</b>
          </Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default AddListingFormSection2;
