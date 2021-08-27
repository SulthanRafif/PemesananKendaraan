const express = require('express')
const mysql = require("mysql")

const app = express()

app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pemesanan_kendaraan",
  });

app.listen(3001, () => {
    console.log('running on port 3001')
});