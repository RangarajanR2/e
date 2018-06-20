var express = require('express');
var router = express.Router();
var crypt = require("./../encrypt")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:message', function(req, res, next) {
	let message = req.params.message;
  res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({encr : crypt.encode(message)}));
});


module.exports = router;
