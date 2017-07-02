var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dilpreet Portfolio',
              Message:'under construction commit 2 testing'});
});

/* GET skills page. */
router.get('/Skills', function(req, res, next) {
    res.render('Skills', { title: 'Dilpreet Portfolio',
        Message:'under construction. this is a skills page'});
});

/* GET projects page. */
router.get('/Projects', function(req, res, next) {
    res.render('Projects', { title: 'Dilpreet Portfolio',
        Message:'under construction. this is a projects page'});
});

/* GET about page. */
router.get('/About', function(req, res, next) {
    res.render('About', { title: 'Dilpreet Portfolio',
        Message:'under construction. this is a about page'});
});

/* GET Contact page. */
router.get('/Contact', function(req, res, next) {
    res.render('Contact', { title: 'Dilpreet Portfolio',
        Message:'under construction. this is a contact page'});
});



module.exports = router;
