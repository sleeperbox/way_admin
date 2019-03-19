const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

mongoose.connect("mongodb://localhost:27017/way");
mongoose.Promise = global.Promise;

const app = express();

 // at header
app.use(passport.initialize());
require("./config/passport");

app.use("/api", require("./routes/user/user"));
app.use("/api", require("./routes/posting/posting"));
app.use("/api", require("./routes/comment/comment"));

app.use(morgan("combine"));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json({ type: "application/*+json" }));

app.get("/", (req, res) => {
  console.log("ok getting / ");
  res.send([
    {
      msg: "sukses"
    }
  ]);
});

app.listen(process.env.PORT || 8080, function() {
  console.log("starting server 8080...");
});
