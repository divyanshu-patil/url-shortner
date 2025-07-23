const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");

const { setUser } = require("../service/auth");

const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  res.redirect("/login");
};
const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.render("login", {
      error: "incorrect credentials",
    });
  }

  const token = setUser(user);
  res.cookie("token", token);
  res.redirect("/");
};

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
