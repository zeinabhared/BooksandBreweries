const { User } = require('../models');

const userData = [
  {
    name: 'dave',
    email: 'Dave@gmail.com',
    password: "asdkjfadskfjas"
  },
  {
    name: 'Bob',
    email: 'bob@gmail.com',
    password: "asdkjfadskfjas"

  },
  {
    name: 'The Da Vinci Code',
    email: 'The Da Vinci Code',
    password: "asdkjfadskfjas"
  },
  {
    name: 'The Da Vinci Code',
    email: 'The Da Vinci Code',
    password: "asdkjfadskfjas"
  },
  {
    name: 'The Da Vinci Code',
    email: 'The Da Vinci Code',
    password: "asdkjfadskfjas"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
