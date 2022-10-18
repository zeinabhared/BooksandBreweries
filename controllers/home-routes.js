const router = require('express').Router();

router.get('/login', function (req, res) {
    console.log("HELLO")
    res.render('login')
});


module.exports = router;