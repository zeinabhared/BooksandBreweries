const { Places } = require('../models');

const placesData = [
  {
    name: `Reuben's Brews - The Taproom`,
    address1: '5010 14th Ave NW',
    address2: '',
    city: 'Seattle',
    state: "WA",
    zip: 98107
  },
  {
    name: '192 Brewing',
    address1: '7324 NE 175th St',
    address2: 'suite f',
    city: 'Kenmore',
    state: "WA",
    zip: 98028
  },
  {
    name: 'Dimond Knot Brewery',
    address1: '5602 232nd St SW',
    address2: '',
    city: 'Mountlake Terrace',
    state: "WA",
    zip: 98043
  },
  {
    name: '20 Corners Brewing',
    address1: '14148 NE 190th',
    address2: 'St A',
    city: 'Woodinville',
    state: "WA",
    zip: 98072
  },
  {
    name: 'Black Raven Brewing',
    address1: '14679 NE 95th St',
    address2: '',
    city: 'Redmond',
    state: "WA",
    zip: 98052
  },
  {
    name: 'Scuttlebutt Brewing',
    address1: '3314 Cedar St',
    address2: '',
    city: 'Everett',
    state: "WA",
    zip: 98201
  },
];

const seedPlaces = () => Places.bulkCreate(placesData);

module.exports = seedPlaces;
