import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
import Sections from "./Sections";

class AddListingFormSection5 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sections sectionName={this.props.sectionName} />
        <Form.Group>
          <Form.Row controlId="video">
            <Col>
              <Form.Label>
                <b>Project Video</b>
              </Form.Label>
              <Form.Control type="url" />
            </Col>{" "}
            <Col>
              <Form.Label>
                <b>Additional Video</b>
              </Form.Label>
              <Form.Control type="url" />
            </Col>
          </Form.Row>
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default AddListingFormSection5;
