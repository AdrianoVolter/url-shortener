var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encurtador URL' });
});

router.post('/new', function(req, res, next) {
  const url = req.body.url;
  console.log(url);
    res.send(url);
}
);

module.exports = router;
