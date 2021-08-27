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

  app.post('/register', (req, res)=> {
      db.query("INSERT INTO user (LEVEL_USER, NAMA_USER, PASSWORD) VALUES (?,?,?)", [level_user, username, password], (err, result))
  })

app.listen(3001, () => {
    console.log('running on port 3001')
});