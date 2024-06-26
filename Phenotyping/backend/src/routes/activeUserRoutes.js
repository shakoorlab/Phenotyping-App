// routes/activeUserRoutes.js
const express = require("express");
const {
  signInUser,
  signOutUser,
  getActiveUsers,
} = require("../controllers/activeUserController");
const router = express.Router();

router.get("/active", getActiveUsers);
router.post("/signin", signInUser);
router.post("/signout", signOutUser);

module.exports = router;
