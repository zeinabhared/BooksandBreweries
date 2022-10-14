const { Books } = require('../models');

const booksData = [
  {
    title: 'The Da Vinci Code',
    infotext: "asdkjfadskfjas"
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    infotext: "asdkjfadskfjas"

  },
  {
    title: 'The Very Hungry Caterpillar',
    infotext: "asdkjfadskfjas"
  },
  {
    title: 'Life of Pi',
    infotext: "asdkjfadskfjas"
  },
  {
    title: 'A Short History of Nearly Everything',
    infotext: "asdkjfadskfjas"
  },
];

const seedBooks = () => Books.bulkCreate(booksData);

module.exports = seedBooks;
