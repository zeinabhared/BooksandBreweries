const seedBooks = require('./book-seeds');
const seedPlaces = require('./places-seeds');
const seedUSER = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBooks();
  console.log('\n----- Books SEEDED -----\n');

  // await seedPlaces();
  // console.log('\n----- Places SEEDED -----\n');

  await seedUSER();
  console.log('\n----- USER SEEDED -----\n');

  process.exit(0);
};

seedAll();
