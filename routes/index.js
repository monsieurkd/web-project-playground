var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route("/api/contacts").get((req, res) => {
  res.status(200).json({message :"get all contacts"});
})

module.exports = router;
