// module.exports = router;
const express = require("express");
const router = express.Router();

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.redirect("/"); // Redirect to login if token is not present
  }

  next(); // Proceed to the next middleware or route handler
};

router.get("/", (req, res) => {
  res.render("Frontend/Login", {
    title: "home",
    currentRoute: req.url
  });
});

// Logout Route
router.get("/logout", (req, res) => {
  res.clearCookie("newtoken"); // Clear the token cookie
  res.redirect("/Reg"); // Redirect to the login page
});

module.exports = router;
