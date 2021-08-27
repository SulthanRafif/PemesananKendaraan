import React, { useState, useEffect } from "react";
import style from "./styles";
import Axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";
import NavbarPenyetuju from "../NavbarAdmin";

function DaftarPesananPenyetuju() {
  return (
    <div>
      <NavbarPenyetuju />
      <div style={style.isi}>
        <div style={style.judul} class="text-center">
          Daftar Pemesanan Kendaraan
        </div>
        <div>
          <input
            type="text"
            placeholder="Cari Nama Profil Peneliti..."
            style={style.kolomPencarian}
          />
        </div>
        <div>
          <Link
            to={{
              pathname: "/tambahProfilDosen",
            }}
          >
            <button style={style.tombolTambah} class="btn btn-success">
              Lakukan Pemesanan
            </button>
          </Link>
        </div>
        <table class="content-table" style={style.fontTabel}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Pemesan</th>
              <th>Nama Kendaraan</th>
              <th>Penyetuju 1</th>
              <th>Penyetuju 2</th>
              <th>Proses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Asep Sepeda</td>
              <td>Lamborgini</td>
              <td>Andra Akmal Maulidani</td>
              <td>Sulthan Rafif</td>
              <td>
                <Link
                  to={{
                    pathname: "/detailPemesananAdmin",
                  }}
                >
                  <button class="btn btn-info">Lihat Detail Pemesanan</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DaftarPesananPenyetuju;
