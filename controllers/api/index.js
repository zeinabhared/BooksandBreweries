const router = require('express').Router();
const bookRoutes = require('./books-routes');
const placesRoutes = require('./places-routes');
const userRoutes = require('./user-routes');
const randomRoutes = require('./random-routes');


router.use('/Books', bookRoutes);
router.use('/Places', placesRoutes);
router.use('/User', userRoutes);
router.use('/Random', randomRoutes);

module.exports = router;