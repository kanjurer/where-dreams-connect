import React, { Component } from "react";
import { Form, Button, Badge } from "react-bootstrap";
import Dropdown from "../Dropdown";
import Sections from "./Sections";

class AddListingFormSection7 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sections sectionName={this.props.sectionName} />
        <Form.Group>
          <Form.Group>
            <Form.Label>
              <b>Social Media</b>
            </Form.Label>
            <Dropdown dropdown={this.props.socialMedia} />
            <Form.Control type="text" placeholder="Social Media" />
            <Button variant="primary">
              <Badge variant="primary">Add</Badge>{" "}
            </Button>{" "}
          </Form.Group>
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default AddListingFormSection7;
