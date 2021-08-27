const express = require('express')
const mysql = require("mysql")
const cors = require("cors")

const app = express()

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pemesanan_kendaraan",
  });

  app.post('/register', (req, res)=> {
      const level_user = req.body.level_user
      const username = req.body.username
      const password = req.body.password 
    
      db.query("INSERT INTO user (LEVEL_USER, NAMA_USER, PASSWORD) VALUES (?,?,?)", 
      [level_user, username, password], 
      (err, result) => {
          console.log(err);
      })
  })

  app.post('/login', (req, res)=> {
    const username = req.body.username
    const password = req.body.password 
  
    db.query("SELECT * FROM user WHERE NAMA_USER = ? AND PASSWORD = ?", 
    [username, password], 
    (err, result) => {
        if (err) {
            res.send({err: err})
        } 
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({message: "Wrong username/password combination!"})
        }
    })
  })

app.listen(3001, () => {
    console.log('running on port 3001')
});