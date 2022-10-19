const router = require('express').Router();
const { appendFile } = require('fs');
const {Book} = require('../../models');

router.get('/api/:bookinput', (req, res) => {
  let bookInfo = req.params.bookinput.toLowerCase();
  const api = `https://www.googleapis.com/books/v1/volumes?q=${bookInfo}`
  var bookData = fetch(api)
  .then((response) => {
      console.log(response)
      if (response.status === 200) {
      }
      return response.json();
  })
    .then(function (data) {
      console.log(data);
      handleResponse(data);
        return data;
    }) 
    res.render(`${bookData}`);

res.json(`Test is working ${bookInfo}!`);
});


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
