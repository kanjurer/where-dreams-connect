import React, { Component } from "react";
import MultiSelectDeleteField from "./MultiSelectDeleteField";

class AdvancedSearch extends Component {
  state = {
    lookingFor: [
      "Arts & Entertainment",
      "Education & Training",
      "Faith & Spirituality",
      "Family/Children",
      "Finance & Legal",
      "Food & Beverage",
      "Health & Beauty",
      "Internet & Marketing",
      "Non-Profit",
      "Pets & Animals",
      "Real Estate & Accommodations",
      "Services & Shopping",
      "Travel & Tourism",
      "Others",
    ],
    badgesLookingFor: [],
  };

  lookingForHandler(option) {
    let lookingFor = this.state.lookingFor;
    let badgesLookingFor = this.state.badgesLookingFor;
    badgesLookingFor = [...badgesLookingFor, option];
    lookingFor = lookingFor.filter((item) => item !== option);

    this.setState({
      badgesLookingFor: badgesLookingFor,
      lookingFor: lookingFor,
    });
  }

  deleteBadge(option) {
    let lookingFor = this.state.lookingFor;
    let badgesLookingFor = this.state.badgesLookingFor;
    lookingFor = [...lookingFor, option];
    badgesLookingFor = badgesLookingFor.filter((item) => item !== option);

    this.setState({
      badgesLookingFor: badgesLookingFor,
      lookingFor: lookingFor,
    });
  }

  render() {
    return (
      <div>
        <span className="display-4 text-center">Advanced Search</span>
        <MultiSelectDeleteField
          lookingForHandler={(i) => this.lookingForHandler(i)}
          deleteBadge={(i) => this.deleteBadge(i)}
          fieldName="Category"
          array1={this.state.lookingFor}
          array2={this.state.badgesLookingFor}
        />
      </div>
    );
  }
}

export default AdvancedSearch;
