const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const Posting = require("../../model/Posting");

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

// Count all posting
router.get("/posting/count", (req, res) => {
  Posting.count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count other posting
router.get("/posting/count/other", (req, res) => {
  let tag = "other"
  Posting.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count quotes posting
router.get("/posting/count/quotes", (req, res) => {
  let tag = "quotes"
  Posting.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count computer-gadget posting
router.get("/posting/count/computer-gadget", (req, res) => {
  let tag = "computer-gadget"
  Posting.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count family-love posting
router.get("/posting/count/family-love", (req, res) => {
  let tag = "family-love"
  Posting.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count fact-rumour posting
router.get("/posting/count/fact-rumour", (req, res) => {
  let tag = "fact-rumour"
  Posting.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count bussiness-work posting
router.get("/posting/count/bussiness-work", (req, res) => {
  let tag = "business-work"
  Posting.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})
// Count fashion-lifestyle posting
router.get("/posting/count/fashion-lifestyle", (req, res) => {
  let tag = "fashion-lifestyle"
  Posting.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

// Count riddles posting
router.get("/posting/count/riddles", (req, res) => {
  let tag = "riddles"
  Posting.find({tags: tag}).count({}, (err, count) => {
    res.send(""+count)
  })
})

module.exports = router;