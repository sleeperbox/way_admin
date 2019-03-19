const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const Comment = require("../../model/Comment");

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
router.use(bodyParser.json());
router.use(cors());

// main api getter
router.get("/", (req, res) => {
  res.send("Success Opening Main API...");
});

// Count all comment
router.get("/comment/count", (req, res) => {
  Comment.count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count other comment
router.get("/comment/count/other", (req, res) => {
  let tag = "other"
  Comment.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count quotes comment
router.get("/comment/count/quotes", (req, res) => {
  let tag = "quotes"
  Comment.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count computer-gadget comment
router.get("/comment/count/computer-gadget", (req, res) => {
  let tag = "computer-gadget"
  Comment.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count family-love comment
router.get("/comment/count/family-love", (req, res) => {
  let tag = "family-love"
  Comment.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count fact-rumour comment
router.get("/comment/count/fact-rumour", (req, res) => {
  let tag = "fact-rumour"
  Comment.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count bussiness-work comment
router.get("/comment/count/bussiness-work", (req, res) => {
  let tag = "business-work"
  Comment.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})
// Count fashion-lifestyle comment
router.get("/comment/count/fashion-lifestyle", (req, res) => {
  let tag = "fashion-lifestyle"
  Comment.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count riddles comment
router.get("/comment/count/riddles", (req, res) => {
  let tag = "riddles"
  Comment.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

module.exports = router;