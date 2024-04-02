const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: "12345",
    host: 'localhost',
    port: 5432,
    database: 'college'
});

// const createTblQry = `CREATE TABLE IF NOT EXISTS login(
//     id SERIAL,
//     username VARCHAR(50) PRIMARY KEY,
//     password VARCHAR(50) NOT NULL
// );`;

// pool.query(createTblQry)
// .then(res => {
//     console.log("Table is successfully created");
//     console.log(res);
// })

// .catch(err => {
//     console.log(err);
// });

module.exports = pool;