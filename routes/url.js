const express = require("express");
const {
  handleCreateShortUrl,
  handleshowAnalytics,
  handleRedirect,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handleCreateShortUrl);
router.get("/:shortId", handleRedirect);
router.get("/analytics/:shortId", handleshowAnalytics);

module.exports = router;
