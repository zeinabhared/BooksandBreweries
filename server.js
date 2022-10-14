const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./index123');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
const hbs = handlebars.create({ helpers });

//Need to add sequlize session//

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
