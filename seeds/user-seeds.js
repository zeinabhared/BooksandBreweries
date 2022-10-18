const { User } = require('../models');

const userData = [
  {
    name: 'Dave',
    email: 'Dave@gmail.com',
    password: "password12345"
  },
  {
    name: 'Bob',
    email: 'bob@gmail.com',
    password: "password12345"

  },
  {
    name: 'Jessica',
    email: 'jessica123@hotmail.com',
    password: "password12345"
  },
  {
    name: 'Nichole',
    email: 'nichole.22@hotmail.com',
    password: "password12345"
  },
  {
    name: 'Kimberly',
    email: 'kim123@gmail.com',
    password: "password12345"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
