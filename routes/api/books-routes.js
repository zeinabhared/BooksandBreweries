const router = require('express').Router();
const { appendFile } = require('fs');
const {Book} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
Book.findAll().then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
Book.findOne({where:{id:req.params.id},include:[Books]}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.post('/', (req, res) => {
Book.create(req.body).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
Book.update(req.body,{where:{id:req.params.id}}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
Book.destroy({where:{id:req.params.id}}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

module.exports = router;
