const { User } = require('../models');

const userData = [
  {
    name: 'Dave',
    email: 'dave@gmail.com',
    password: "password12345"
  },
  {
    name: 'Bob',
    email: 'bob@gmail.com',
    password: "password12345"

  },
  {
    name: 'Jessica',
    email: 'jessica@hotmail.com',
    password: "password12345"
  },
  {
    name: 'Nichole',
    email: 'nichole@hotmail.com',
    password: "password12345"
  },
  {
    name: 'Kimberly',
    email: 'kim@gmail.com',
    password: "password12345"
  },
];

const seedUser = () => User.bulkCreate(userData,{
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
