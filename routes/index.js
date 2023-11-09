var express = require("express");
var router = express.Router();
const Link = require("../models/links");


router.get("/:short/stats", async (req, res, next) => {
  const short = req.params.short;
  const result = await Link.findOne({
    where: {
      short,
    },
  });
 if(!result)return res.status(404).send("Not Found");
  res.render("stats", result.dataValues);
}
);

router.get("/:short", async (req, res, next) => {
  const short = req.params.short;
  const result = await Link.findOne({
    where: {
      short,
    },
  });
  if (!result) return res.status(404).send("Not Found");

  result.hits ++;
  await result.save();
  res.redirect(result.url);

});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Encurtador URL" });
});

function generateRandomString() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

router.post("/new", async (req, res, next) => {
  const url = req.body.url;
  const short = generateRandomString();
  const result = await Link.create({
    url,
    short,
  });

  res.render("stats", result.dataValues);
});

module.exports = router;
