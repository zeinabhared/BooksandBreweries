const router = require('express').Router();
const {Places} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
Places.findAll({include:[Places]}).then(placesData => res.json(placesData)).catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
Places.findOne({where:{id:req.params.id},include:[Places]}).then(placesData => res.json(placesData)).catch(err => res.json(err))
});

router.post('/', (req, res) => {
Places.create(req.body).then(placesData => res.json(placesData)).catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
Places.update(req.body,{where:{id:req.params.id}}).then(placesData => res.json(placesData)).catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
Places.destroy({where:{id:req.params.id}}).then(placesData => res.json(placesData)).catch(err => res.json(err))
});

module.exports = router;