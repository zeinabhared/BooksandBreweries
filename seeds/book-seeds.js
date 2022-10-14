const { Books } = require('../books');

const booksData = [
  {
    title: 'The Da Vinci Code',
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
  },
  {
    title: 'The Very Hungry Caterpillar',
  },
  {
    title: 'Life of Pi',
  },
  {
    title: 'A Short History of Nearly Everything',
  },
];

const seedCategories = () => Category.bulkCreate(booksData);

module.exports = seedCategories;
