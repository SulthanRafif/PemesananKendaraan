const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pemesanan_kendaraan",
});

app.post("/register", (req, res) => {
  const level_user = req.body.level_user;
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO user (LEVEL_USER, NAMA_USER, PASSWORD) VALUES (?,?,?)",
    [level_user, username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user WHERE NAMA_USER = ? AND PASSWORD = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    }
  );
});

app.get("/api/get_pesanan", (req, res) => {
  const sqlUpdate =
    "SELECT (ROW_NUMBER() OVER (ORDER BY daftar_pemesan.ID_PEMESANAN)) AS NOMOR, daftar_pemesan.ID_PEMESANAN AS ID_PEMESAN, daftar_pemesan.NAMA_USER AS NAMA_PEMESAN, daftar_pemesan.NAMA_KENDARAAN as NAMA_KENDARAAN, daftar_persetujuan_1.NAMA_PENYETUJU_1 AS NAMA_PENYETUJU_1, daftar_persetujuan_1.PERSETUJUAN_1 AS STATUS_PERSETUJUAN_1, daftar_persetujuan_2.NAMA_PENYETUJU_2 AS NAMA_PENYETUJU_2,daftar_persetujuan_2.PERSETUJUAN_2 AS STATUS_PERSETUJUAN_2 FROM daftar_pemesan INNER JOIN daftar_persetujuan_1 ON daftar_pemesan.ID_PEMESANAN = daftar_persetujuan_1.ID_PEMESANAN INNER JOIN daftar_persetujuan_2 ON daftar_pemesan.ID_PEMESANAN = daftar_persetujuan_2.ID_PEMESANAN;";
  db.query(sqlUpdate, (err, result) => {
    res.send(result);
  });
});

app.post("/tambah_pesanan", (req, res) => {
  const nama_pemesan = req.body.nama_pemesan;
  const nama_kendaraan = req.body.nama_kendaraan;
  const nama_penyetuju_1 = req.body.nama_penyetuju_1;
  const nama_penyetuju_2 = req.body.nama_penyetuju_2;
  const status_persetujuan_1 = req.body.status_persetujuan_1;
  const status_persetujuan_2 = req.body.status_persetujuan_2;

  db.query(
    "INSERT INTO pemesanan (ID_PEMESAN, ID_KENDARAAN, ID_PENYETUJU_1, ID_PENYETUJU_2, STATUS_PERSETUJUAN_1, STATUS_PERSETUJUAN_2) VALUES (?,?,?,?,?,?);",
    [
      nama_pemesan,
      nama_kendaraan,
      nama_penyetuju_1,
      nama_penyetuju_2,
      status_persetujuan_1,
      status_persetujuan_2,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
