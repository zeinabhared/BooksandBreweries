const router = require('express').Router();
const { appendFile } = require('fs');
const Random = require('../../models/Random');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    const randomData = await Random.findAll().catch((err) => {
        res.json(err);
    });
    const response = {
        status: 'success',
        body: randomData,
      };
      console.log("Well it fired");
      res.status(200).json(randomData);
});

module.exports = router;