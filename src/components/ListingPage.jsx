import React, { Component } from "react";
import ImagesCarousel from "./ImagesCarousel";
import ListingPageDescription from "./ListingPageDescription";
import ListingPageAdditionalDetails from "./ListingPageAdditionalDetails";

class ListingPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ImagesCarousel />
        <br />
        <ListingPageDescription />
        <br />
        <ListingPageAdditionalDetails />
        <br />
      </React.Fragment>
    );
  }
}

export default ListingPage;
