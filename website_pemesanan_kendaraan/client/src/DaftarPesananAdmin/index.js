import React, { useState, useEffect } from "react";
import style from "./styles";
import Axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";
// import NavbarAdmin from "../NavbarAdmin";

function DaftarPesanan() {
  const [searchTerm, setSearchTerm] = useState("");

  const [daftarPemesanan, setDaftarPemesanan] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get_pesanan").then((response) => {
      setDaftarPemesanan(response.data);
    });
  }, []);
  return (
    <div>
      {/* <NavbarAdmin /> */}
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
        <div>
          <Link
            to={{
              pathname: "/pemesananAdmin",
            }}
          >
            <button style={style.tombolTambah} className="btn btn-success">
              Lakukan Pemesanan
            </button>
          </Link>
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
                return (
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
                          pathname: "/detailPemesanan",
                          aboutProps: val.ID_PEMESAN,
                        }}
                      >
                        <button className="btn btn-info">
                          Lihat Detail Pemesanan
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

export default DaftarPesanan;
