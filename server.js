const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);


// add the sessions and handlebars 




sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});