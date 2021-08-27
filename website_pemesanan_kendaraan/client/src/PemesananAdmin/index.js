import React, { useState } from "react";
import NavbarAdmin from "../NavbarAdmin";
import Axios from "axios";

function PemesananAdmin() {
  const [namaPemesan, setNamaPemesan] = useState("");
  const [namaKendaraan, setNamaKendaraan] = useState("");
  const [namaPenyetuju1, setNamaPenyetuju1] = useState("");
  const [namaPenyetuju2, setNamaPenyetuju2] = useState("");

  const tambahPesanan = () => {
    console.log(namaPemesan);

    // Axios.post("http://localhost:3001/tambah_pesanan", {
    //   nama_pemesan: namaPemesan,
    //   nama_kendaraan: namaKendaraan,
    //   nama_penyetuju_1: namaPenyetuju1,
    //   nama_penyetuju_2: namaPenyetuju2,
    // }).then((response) => {
    //   console.log(response);
    // });
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="container-fluid row mt-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div classNameName="form-group mt-3">
            <label>Nama Pemesan</label>
            <div>
              <select
                onChange={(e) => {
                  setNamaPemesan(e.target.value);
                }}
              >
                <option value={1}>Pemesan</option>
                <option value={10}>Pemesan Dua</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Nama Kendaraan</label>
            <div>
              <select
                onChange={(e) => {
                  setNamaKendaraan(e.target.value);
                }}
              >
                <option value="1">Toyota Corolla</option>
                <option value="2">Toyota Supra</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Nama Penyetuju 1</label>
            <div>
              <select
                onChange={(e) => {
                  setNamaPenyetuju1(e.target.value);
                }}
              >
                <option value="2">Penyetuju Satu</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Nama Penyetuju 2</label>
            <div>
              <select
                onChange={(e) => {
                  setNamaPenyetuju2(e.target.value);
                }}
              >
                <option value="3">Penyetuju Dua</option>
                <option value="8">Penyetuju Dua B</option>
              </select>
            </div>
          </div>
          <button onClick={tambahPesanan} className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default PemesananAdmin;
