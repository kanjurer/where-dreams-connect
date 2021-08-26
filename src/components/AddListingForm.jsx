import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";
import axios from "axios";
import AddListingFormSection1 from "./AddListingFormSection/AddListingFormSection1";
import AddListingFormSection2 from "./AddListingFormSection/AddListingFormSection2";
import AddListingFormSection3 from "./AddListingFormSection/AddListingFormSection3";
import AddListingFormSection4 from "./AddListingFormSection/AddListingFormSection4";
import AddListingFormSection5 from "./AddListingFormSection/AddListingFormSection5";
import AddListingFormSection6 from "./AddListingFormSection/AddListingFormSection6";
import AddListingFormSection7 from "./AddListingFormSection/AddListingFormSection7";
import AddListingFormSection8 from "./AddListingFormSection/AddListingFormSection8";

class AddListingForm extends Component {
  constructor(props) {
    super(props);
    this.handleProjectTitle = this.handleProjectTitle.bind(this);
    this.handleProjectTagline = this.handleProjectTagline.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    projectTitle: "",
    projectTagline: "",

    sections: [
      "Info",
      "More Info",
      "Project Details",
      "Primary Listing Details",
      "Media",
      "Frequently Asked Questions",
      "Social Media",
      "Resource List",
    ],
    projectCategory: [
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
    areasLookingForHelpFrom: ["Locally", "Same Country", "Anywhere"],
    lookingFor: [
      "Leaders",
      "Experts",
      "Volunteers",
      "Ambassadors",
      "Financial",
      "Legal",
      "Technical",
      "Mentors",
      "Other Resources",
    ],
    badgesLookingFor: [],
    typeOfProject: ["Personal", "Professional", "Non-Profit"],
    socialMedia: ["Facebook", "Instagram", "LinkedIn", "Twitter", "Youtube"],
    resourceList: ["a", "b"],
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
  handleProjectTitle(e) {
    const state = {
      projectTitle: e.target.projectTitle,
    };
    this.setState(state);
  }
  handleProjectTagline(e) {
    const state = {
      projectTagline: e.target.projectTagline,
    };
    this.setState(state);
  }
  onSubmit(e) {
    e.preventDefault();
    const details = {
      projectTitle: this.state.projectTitle,
      projectTagline: this.state.projectTagline,
    };
    axios
      .post("http://localhost:5000/addListing", details)
      .then((res) => console.log("cool", res.data));
  }

  render() {
    return (
      <Container>
        <div className="container col-5">
          <Form onSubmit={this.onSubmit}>
            <AddListingFormSection1
              projectCategory={this.state.projectCategory}
              sectionName={this.state.sections[0]}
              projectTitle={this.state.projectTitle}
              projectTagline={this.state.projectTagline}
              handleProjectTitle={this.handleProjectTitle}
              handleProjectTagline={this.handleProjectTagline}
            />{" "}
            <br />
            <AddListingFormSection2 sectionName={this.state.sections[1]} />
            <br />
            <AddListingFormSection3
              areasLookingForHelpFrom={this.state.areasLookingForHelpFrom}
              badgesLookingFor={this.state.badgesLookingFor}
              lookingFor={this.state.lookingFor}
              typeOfProject={this.state.typeOfProject}
              lookingForHandler={(i) => this.lookingForHandler(i)}
              deleteBadge={(i) => this.deleteBadge(i)}
              sectionName={this.state.sections[2]}
            />
            <br />
            <AddListingFormSection4 sectionName={this.state.sections[3]} />
            <br />
            <AddListingFormSection5 sectionName={this.state.sections[4]} />
            <br />
            <AddListingFormSection6 sectionName={this.state.sections[5]} />
            <br />
            <AddListingFormSection7
              socialMedia={this.state.socialMedia}
              sectionName={this.state.sections[6]}
            />
            <br />
            <AddListingFormSection8
              resourceList={this.state.resourceList}
              sectionName={this.state.sections[7]}
            />
            <br />
            <button type="submit">Submit</button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default AddListingForm;
