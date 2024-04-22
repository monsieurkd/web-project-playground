var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/manager.html', function(req,res,next){
  res.render('manager', {title: 'manager'});
});

router.get('/event-description.html', function(req,res,next){
  res.render('description', {title: 'manager'});
});



module.exports = router;
