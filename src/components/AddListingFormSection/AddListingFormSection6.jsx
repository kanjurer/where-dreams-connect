import React, { Component } from "react";
import { Form, Button, Badge } from "react-bootstrap";
import Sections from "./Sections";

class AddListingFormSection6 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sections sectionName={this.props.sectionName} />
        <Form.Group>
          <Form.Label>
            <b>Frequently Asked Questions</b>
          </Form.Label>
          <Form.Group controlId="frequentlyAskedQuestion">
            <Form.Control type="text" placeholder="Question" />
          </Form.Group>
          <Form.Group controlId="answer">
            <Form.Control type="text" placeholder="Answer" />
          </Form.Group>{" "}
          <Form.Group>
            {" "}
            <Button variant="primary">
              <Badge variant="primary">Click to Add</Badge>{" "}
            </Button>{" "}
          </Form.Group>
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default AddListingFormSection6;
