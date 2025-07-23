const { getUser } = require("../service/auth");

function checkAuth(req, res, next) {
  const authorizationHeaderValue = req.cookies?.token;
  // const authorizationHeaderValue = req.headers["authorization"];
  req.user = null;
  if (
    !authorizationHeaderValue
    //|| !authorizationHeaderValue.startsWith("Bearer")
  ) {
    return next();
  }
  // const token = authorizationHeaderValue.split("Bearer ")[1];
  // const token = authorizationHeaderValue.split("Bearer ")[0];
  const token = authorizationHeaderValue;
  const user = getUser(token);

  req.user = user;
  return next();
}

function restrictTo(roles = []) {
  return (req, res, next) => {
    if (!req.user) return res.redirect("/login");
    if (!roles.includes(req.user.role)) return res.end("UnAuthorized");

    return next();
  };
}

module.exports = {
  checkAuth,
  restrictTo,
};
