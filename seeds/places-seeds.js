const { Places } = require('../models');

const placesData = [
  {
    city: 'Seattle',
    brewery: "192 Brewing"
  },
  {
    brewery: 'Dimond Knot Brewery',
    city: "Mukilteo"

  },
  {
    brewery: '20 Corners Brewing',
    city: "Woodinville"
  },
  {
    brewery: 'Black Raven Brewing',
    city: "Redmond"
  },
  {
    brewery: 'Scuttlebutt Brewing',
    city: "Everett"
  },
];

const seedPlaces = () => Places.bulkCreate(placesData);

module.exports = seedPlaces;
