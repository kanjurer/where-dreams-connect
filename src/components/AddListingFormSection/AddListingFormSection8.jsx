import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Dropdown from "../Dropdown";
import Sections from "./Sections";

class AddListingFormSection8 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sections sectionName={this.props.sectionName} />

        <Form.Group>
          <Form.Label>
            <b>Resource List</b>
          </Form.Label>
          <Dropdown dropdown={this.props.resourceList} />
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default AddListingFormSection8;
