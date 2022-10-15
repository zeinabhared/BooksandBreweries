const router = require('express').Router();
const { appendFile } = require('fs');
const {Category, Books} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
Category.findAll({include:[Books]}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
 Category.findOne({where:{id:req.params.id},include:[Books]}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.post('/', (req, res) => {
Category.create(req.body).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
Category.update(req.body,{where:{id:req.params.id}}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
Category.destroy({where:{id:req.params.id}}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

module.exports = router;
