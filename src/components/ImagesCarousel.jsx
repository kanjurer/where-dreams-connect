import React, { Component } from "react";
import { Carousel, Breadcrumb } from "react-bootstrap";
import image from "./images/website-cost.jpg";

class ImagesCarousel extends Component {
  state = {};
  render() {
    return (
      <div className="container col-7">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image} alt="Third slide" />
            <Breadcrumb>
              <Breadcrumb.Item href="#">Feed</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
              <Breadcrumb.Item active>Project Title</Breadcrumb.Item>
            </Breadcrumb>

            <Carousel.Caption>
              <h3>Project Title</h3>
              <p>Project Tagline</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ImagesCarousel;
