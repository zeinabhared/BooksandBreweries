const router = require('express').Router();
const withAuth = require('../utils/auth');

//tested works 
router.get('/', (req,res) => {
    res.render('homepage', {logged_in: req.session.logged_in} );
   });

router.get('/login', (req, res) => {
res.render('login', {logged_in: req.session.logged_in}); 
});

router.get('/signup', (req,res) => {
    res.render('signup', {logged_in: req.session.logged_in});
});

router.get('/profile', withAuth, (req,res) => {
    res.render('profile', {logged_in: req.session.logged_in}); 
});

router.get('/logout', (req, res) => {
    res.render('homepage', {logged_in: req.session.logged_in}); 
    });

module.exports = router;