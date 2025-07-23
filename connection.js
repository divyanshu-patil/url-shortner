const mongoose = require("mongoose");

const connectMongoDB = async (url) => {
  // Connection
  return mongoose.connect(url).then(() => console.log("MongoDB connected"));
};

module.exports = {
  connectMongoDB,
};
