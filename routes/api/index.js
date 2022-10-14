const router = require('express').Router();
const bookRoutes = require('./book-routes');
const placesRoutes = require('./places-routes');
const userRoutes = require('./user-routes');

router.use('/books', bookRoutes);
router.use('/places', placesRoutes);
router.use('/user', userRoutes);

module.exports = router;