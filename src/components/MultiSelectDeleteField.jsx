import React, { Component } from "react";
import { Form, Button, Badge } from "react-bootstrap";

class MultiSelectDeleteField extends Component {
  state = {};
  render() {
    return (
      <Form.Group>
        <Form.Group>
          <Form.Label>
            <b>{this.props.fieldName}</b>
          </Form.Label>
          <Form.Control size="sm" as="select" multiple>
            {this.props.array1.map((i) => (
              <option onClick={() => this.props.lookingForHandler(i)}>
                {i}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          {this.props.array2.map((i) => {
            return (
              <Button
                variant="primary"
                onClick={() => this.props.deleteBadge(i)}
              >
                {i} <Badge variant="primary">&#10005;</Badge>{" "}
              </Button>
            );
          })}
        </Form.Group>
      </Form.Group>
    );
  }
}

export default MultiSelectDeleteField;
