var express = require("express");
var router = express.Router();
const stats = require("../controllers/short.controller")

router.get("/:short/stats", stats.stats);

router.get("/:short", stats.getShort);

router.get("/", stats.homePage);

router.post("/new", stats.new);

module.exports = router;
