const router = require('express').Router();
const { appendFile } = require('fs');
const {Random} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
Random.findAll({include:[Random]}).then(randomData => res.json(randomData)).catch(err => res.json(err))
});


module.exports = router;