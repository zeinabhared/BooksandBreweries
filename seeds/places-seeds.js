const { Places } = require('../models');

const placesData = [
  {
    city: 'Seattle',
    brewery: "192 Brewing"
  },
  {
    title: 'Dimond Knot Brewery',
    infotext: "Mukilteo"

  },
  {
    title: '20 Corners Brewing',
    infotext: "Woodinville"
  },
  {
    title: 'Black Raven Brewing',
    infotext: "Redmond"
  },
  {
    title: 'Scuttlebutt Brewing',
    infotext: "Everett"
  },
];

const seedPlaces = () => Places.bulkCreate(placesData);

module.exports = seedPlaces;
