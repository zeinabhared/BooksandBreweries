const router = require('express').Router();
const bookRoutes = require('./books-routes');
const placesRoutes = require('./places-routes');
const userRoutes = require('./user-routes');

router.use('/Books', bookRoutes);
router.use('/Places', placesRoutes);
router.use('/User', userRoutes);

module.exports = router;