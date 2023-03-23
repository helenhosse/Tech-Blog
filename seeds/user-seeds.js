const { User } = require('../models');

const userSeeds = [
    {
        username: 'helenhosse1',
        email: 'helenhosse@gmail.com',
        password: 'asdf;lkj'
    },
    {
        username: 'luciehosse1',
        email: 'luciehosse@gmail.com',
        password: 'asdf;lkj'
    },
    {
        username: 'wendyhosse1',
        email: 'wendyhosse@gmail.com',
        password: 'asdf;lkj'
    },
    {
        username: 'mikes1',
        email: 'mikes@gmail.com',
        password: 'asdf;lkj'
    },
    {
        username: 'carolp1',
        email: 'carolp1@gmail.com',
        password: 'asdf;lkj'
    }
];

const users = () => User.bulkCreate(userSeeds, {individualHooks: true});
module.exports = users;