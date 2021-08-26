import React, { Component } from "react";
import NavBar from "./components/NavBar";
import JumbotronArea from "./components/JumbotronArea";
import FeaturedListings from "./components/FeaturedListings";
import GetStarted from "./components/GetStarted";
import PricingPlans from "./components/PricingPlans";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {" "}
        <NavBar />
        <JumbotronArea />
        <br />
        <FeaturedListings />
        <br /> <hr />
        <GetStarted />
        <br />
        <PricingPlans />
        <Reviews />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
