import React, { useState, useEffect } from "react";
import style from "./styles";
import Axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";

function DaftarPesananPenyetuju(props) {
  //
  console.log("Data Id User Dari DaftarPemesananPenyetuju: ", props.idUser);
  console.log(
    "Data Level User Dari DaftarPemesananPenyetuju: ",
    props.levelUser
  );
  const [searchTerm, setSearchTerm] = useState("");

  const [daftarPemesanan, setDaftarPemesanan] = useState([]);

  useEffect(() => {
    if (props.levelUser === 1) {
      console.log("Daftar Pesanan untuk Penyetuju Satu ditampilkan");
      Axios.get(
        `http://localhost:3001/api/get_pesanan_penyetuju_1/${props.idUser}`
      ).then((response) => {
        setDaftarPemesanan(response.data);
      });
    } else {
      console.log("Daftar Pesanan untuk Penyetuju Dua ditampilkan");
      Axios.get(
        `http://localhost:3001/api/get_pesanan_penyetuju_2/${props.idUser}`
      ).then((response) => {
        setDaftarPemesanan(response.data);
      });
    }
  }, [props.idUser, props.levelUser]);
  return (
    <div>
      <div style={style.isi}>
        <div style={style.judul} className="text-center">
          Daftar Pemesanan Kendaraan
        </div>
        <div>
          <input
            type="text"
            placeholder="Cari Nama Pemesan..."
            style={style.kolomPencarian}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <table className="content-table" style={style.fontTabel}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Pemesan</th>
              <th>Nama Kendaraan</th>
              <th>Nama Penyetuju 1</th>
              <th>Status Persetujuan Penyetuju 1</th>
              <th>Nama Penyetuju 2</th>
              <th>Status Persetujuan Penyetuju 2</th>
              <th>Proses</th>
            </tr>
          </thead>
          <tbody>
            {daftarPemesanan
              // eslint-disable-next-line
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.NAMA_PEMESAN.toLowerCase().includes(
                    searchTerm.toLowerCase()
                  )
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return val.NAMA_PEMESAN === null ? (
                  <div style={style.pemberitahuan} class="text-center">
                    Semua pemesanan sudah disetujui
                  </div>
                ) : (
                  <tr className="active-row text-center" key={key}>
                    <td>{val.NOMOR}</td>
                    <td>{val.NAMA_PEMESAN}</td>
                    <td>{val.NAMA_KENDARAAN}</td>
                    <td>{val.NAMA_PENYETUJU_1}</td>
                    <td>{val.STATUS_PERSETUJUAN_1}</td>
                    <td>{val.NAMA_PENYETUJU_2}</td>
                    <td>{val.STATUS_PERSETUJUAN_2}</td>
                    <td>
                      <Link
                        to={{
                          pathname: "/persetujuan",
                          namaPemesan: val.NAMA_PEMESAN,
                        }}
                      >
                        <button className="btn btn-info">
                          Berikan Persetujuan
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DaftarPesananPenyetuju;
