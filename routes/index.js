var express = require('express');
var router = express.Router();
const Link = require('../models/links');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encurtador URL' });
});


function generateRandomString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

router.post('/new', async (req, res, next)=> {
  const url = req.body.url;
  const short = generateRandomString();
  const result = await Link.create({
    url,
    short
 });
  
  res.render('stats', result.dataValues);
  
});

module.exports = router;
