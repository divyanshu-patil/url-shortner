const jwt = require("jsonwebtoken");
const KEY = "DIvu";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    KEY
  );
}
function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, KEY);
  } catch (e) {
    return null;
  }
}

module.exports = {
  getUser,
  setUser,
};
