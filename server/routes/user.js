const express = require("express");
const passport = require("passport");
const {
  getAdminStats,
  getAdminUsers,
  logout,
  myProfile,
} = require("../controllers/user.js");
const { authorizeAdmin, isAuthenticated } = require("../middlewares/auth.js");

const router = express.Router()

router.get(
    "/googlelogin",
    passport.authenticate("google", {
        scope: [profile],
    })
);

router.get(
    "/login", 
    passport.authenticate("google", {
        successRedirect: process.env.FRONTEND_URL,
    })
)