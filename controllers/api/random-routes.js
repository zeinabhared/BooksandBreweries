const router = require('express').Router();
const { appendFile } = require('fs');
const Random = require('../../models/Random');

// The `/api/categories` endpoint

router.get('/:count', async (req, res) => {
    const count = req.params.count.toLowerCase();
    const randomData = await Random.findAll().catch((err) => {
        res.json(err);
    });
    function randomBWordselected() {
        let randomBWordarray = [];
        while (randomBWordarray.length < count) {
            var randomnumber = Math.floor(Math.random() * randomData.length);
            if(randomBWordarray.indexOf(randomnumber) === -1) randomBWordarray.push(randomnumber);
        }
        return randomBWordarray;
    }
    let randomBWordarray = randomBWordselected();
    let randomBWordsArraySelected = [randomData[randomBWordarray[0]],randomData[randomBWordarray[1]]]
    res.json(randomBWordsArraySelected);
});

module.exports = router;