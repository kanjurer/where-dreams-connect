import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Dropdown from "../Dropdown";
import Sections from "./Sections";

class AddListingFormSection1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sections sectionName={this.props.sectionName} />
        <span className="display-4">{}</span>
        <Form.Group>
          <Form.Group controlId="projectTitle">
            <Form.Label>
              <b>Project Title</b>
            </Form.Label>
            <Form.Control
              type="text"
              projectTitle={this.props.projectTitle}
              onChange={this.props.handleProjectTitle}
            />
          </Form.Group>
          <Form.Group controlId="projectTagline">
            <Form.Label>
              <b>Project Tagline</b>
            </Form.Label>
            <Form.Control
              type="text"
              projectTagline={this.props.projectTagline}
              onChange={this.props.handleProjectTagline}
            />
          </Form.Group>{" "}
          <Form.Group controlId="category">
            <Form.Label>
              <b>Category</b>
            </Form.Label>
            <Dropdown dropdown={this.props.projectCategory} />
          </Form.Group>
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default AddListingFormSection1;
