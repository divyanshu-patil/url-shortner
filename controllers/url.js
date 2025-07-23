const URL = require("../models/url");
const shortid = require("shortid");

const handleCreateShortUrl = async (req, res) => {
  if (!req.body.url) {
    return res.status(400).json({ error: "url is required" });
  }

  const shortId = shortid(6);
  const shortUrl = await URL.create({
    shortId,
    redirectUrl: req.body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  // res.render("home", {
  //   id: "http://localhost:8001/url/" + shortUrl.shortId,
  // });

  res.redirect("/");
  //   res.json({ status: "success", url: shortUrl.shortId });
};

const handleshowAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });

  if (!result) {
    return res.status(404).json({ error: "url not found" });
  }

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

const handleRedirect = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
};
module.exports = {
  handleCreateShortUrl,
  handleRedirect,
  handleshowAnalytics,
};
