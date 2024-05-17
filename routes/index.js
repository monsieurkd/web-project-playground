var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/manager.html', function(req,res,next){
  res.render('home', {title: 'manager'});
});

router.get('/event-description.html', function(req,res,next){
  res.render('description', {title: 'manager'});
});

router.get('/login.html', function(req,res,next){
  res.render('description', {title: 'login'});
});

router.get('/profile.html', function(req,res,next){
  res.render('description', {title: 'description'});
});

router.get('/admin.html', function(req,res,next){
  res.render('description', {title: 'admin'});
});

router.get('/admin-users.html', function(req,res,next){
  res.render('description', {title: 'admin-user'});
});


module.exports = router;
