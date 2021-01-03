const knex = require('knex');
const configuration = require('../../knexfile');

const connectionDB = knex(configuration.development);

module.exports = connectionDB;
