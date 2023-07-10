const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "db_progate",
});

connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("success");
});

app.get("/", (req, res) => {
    connection.query("SELECT * FROM users", (error, results) => {
        console.log(results);
        res.render("hello.ejs");
    });
});

app.listen(3000, () => {
    console.log("server on...");
});
