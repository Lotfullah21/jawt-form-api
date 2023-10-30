const express = require("express");
const { dashboard, login } = require("../controllers/jwt");
const router = express.Router();

router.get("/dashboard", dashboard);
router.post("/login", login);

module.exports = router;
