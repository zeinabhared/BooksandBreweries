// import models
const books = require('./Books');
const places = require('./Places.js');
const user = require('./User.js');
const random = require('./Random.js');

// // A belongsTo B
// A.belongsTo(B, {
//   foreignKey: 'b_id',
// });


// Categories have many Products
// A.hasMany(B, {
//     //   foreignKey: 'B_id',
//     // });
//EXAMPLE//
// Category.hasMany(Product, {
//   foreignKey: 'product_id',
// });



// A.belongsToMany(B, { through: 'C' });
// A belongToMany C (through C)
  //EXAMPLE//
// Product.belongsToMany(Tag, {
//   through: 'tag_id',

// });


module.exports = {
  books,
  user,
  places,
  random
}