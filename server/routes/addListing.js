const router = require("express").Router();
let Listing = require("../models/addListing.model");

router.route("/").post((req, res) => {
  const newListing = new Listing({
    projectTitle: req.body.projectTitle,
    projectTagline: req.body.projectTagline,
    /* Category:this.req,
    Description:this.req,
    TagsOrKeywords:this.req,
    AreasLookingForHelpFrom:this.req,
    LookingFor:this.req,
    TypeOfProject:this.req,
    City:this.req,
    Website:this.req,
    ProjectVideo:this.req,
    AdditionalVideo:this.req,
    FrequentlyAskedQuestions:this.req,
    SocialMedia:this.req,
    ResourceList:this.req,*/
  });

  newListing
    .save()
    .then(() => res.send("added"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
