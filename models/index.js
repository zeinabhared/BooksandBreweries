// import models
const Book = require('./Books.js');
const Places = require('./Places.js');
const User = require('./User.js');
const Random = require('./Random.js');

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
  Book,
  User,
  Places,
  Random
}