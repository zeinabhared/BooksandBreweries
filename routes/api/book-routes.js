const router = require('express').Router();
const {Books} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
Books.findAll().then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
 Books.findOne({where:{id:req.params.id}}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.post('/', (req, res) => {
Books.create(req.body).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
Books.update(req.body,{where:{id:req.params.id}}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
Books.destroy({where:{id:req.params.id}}).then(booksData => res.json(booksData)).catch(err => res.json(err))
});

module.exports = router;
