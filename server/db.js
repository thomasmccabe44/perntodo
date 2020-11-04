const pgKey = require('./pgConfig.js');
const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'tmccabe',
	password: pgKey,
	host: 'localhost',
	port: 5432,
	database: 'perntodo',
});

module.exports = pool;
