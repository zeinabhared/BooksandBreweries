const router = require('express').Router();
const bookRoutes = require('./books-routes');
const placesRoutes = require('./places-routes');
const userRoutes = require('./user-routes');
const randomRoutes = require('./random-routes');


router.use('/books', bookRoutes);
router.use('/places', placesRoutes);
router.use('/user', userRoutes);
router.use('/random', randomRoutes);

module.exports = router;