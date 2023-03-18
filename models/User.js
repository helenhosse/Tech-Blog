const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt'); // needed for the password login
const sequelize = require('../config/connection');



// be sure to add hooks 

module.exports = User;
