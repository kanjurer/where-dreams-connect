const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_DB;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
//start

const addListing = require("./routes/addListing");
app.use("/addListing", addListing);

app.listen(port, () => console.log("App is listening..."));
