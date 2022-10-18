const seedBooks = require('./book-seeds');
const seedPlaces = require('./places-seeds');
const seedUser = require('./user-seeds');
const seedRandom = require('./random-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBooks();
  console.log('\n----- Books SEEDED -----\n');

  await seedPlaces();
  console.log('\n----- Places SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedRandom();
  console.log('\n----- Places SEEDED -----\n');

  process.exit(0);
};

seedAll();
