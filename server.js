const express = require('express');
const cors = require('cors');
const pool = require('./database');

const app = express();

app.use(express.json());
app.use(cors());

app.post("/adduser", (req, res) => {
    const username = req.body["username"];
    const password = req.body["password"];

    const insertUserQuery = `INSERT INTO login(username, password) VALUES( '${username}', '${password}');`;
    pool.query(insertUserQuery).then((res) => {
        console.log("User added successfully");
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

    console.log("Hello World");
    res.send("Received GET request to add user with username: " + req.body);
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
