const mysql = require('mysql');

const db = mysql.createPool({
    host: process.env.REACT_APP_DB_HOST,

    port: process.env.REACT_APP_DB_PORT,

    user: 'sejun3278',

    password: process.env.REACT_APP_DB_PASSWORD,
    
    database: 'my-blog'
});

module.exports = db;