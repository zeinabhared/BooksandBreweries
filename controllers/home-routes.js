const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req,res) => {
    res.render('homepage'), {
    users,
    logged_in: req.session.logged_in,
  }});

router.get('/login', (req, res) => {
res.render('login'); 
});

router.get('/signup', (req,res) => {
    res.render('signup');
});

router.get('/profile', (req,res) => {
    res.render('profile'); 
});

router.get('/logout', (req, res) => {
    res.render('homepage'); 
    });

module.exports = router;