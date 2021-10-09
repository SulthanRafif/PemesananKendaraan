import React from "react";
import Axios from "axios";

const initialState = {
  namaPemesan: "1",
  namaKendaraan: "1",
  namaPenyetuju1: "2",
  namaPenyetuju2: "3",
  statusPersetujuan1: "1",
  statusPersetujuan2: "1",

  daftarNamaPemesan: [],
  daftarMobil: [],
  daftarPenyetuju1: [],
  daftarPenyetuju2: [],
};

export default class PemesananAdmin extends React.Component {
  state = initialState;

  componentDidMount = () => {
    console.log("Component Did Mount");
    Axios.get("http://localhost:3001/api/get_nama_pemesan").then((res) => {
      console.log(res.data);
      this.setState({
        daftarNamaPemesan: res.data,
      });
      console.log("daftar nama pemesan", this.state.daftarNamaPemesan);
    });
    Axios.get("http://localhost:3001/api/get_nama_kendaraan").then((res) => {
      console.log(res.data);
      this.setState({
        daftarMobil: res.data,
      });
      console.log("daftar nama kendaraan", this.state.daftarMobil);
    });
    Axios.get("http://localhost:3001/api/get_user_penyetuju_1").then((res) => {
      console.log(res.data);
      this.setState({
        daftarPenyetuju1: res.data,
      });
      console.log("daftar nama penyetuju 1", this.state.daftarPenyetuju1);
    });
    Axios.get("http://localhost:3001/api/get_user_penyetuju_2").then((res) => {
      console.log(res.data);
      this.setState({
        daftarPenyetuju2: res.data,
      });
      console.log("daftar nama penyetuju 1", this.state.daftarPenyetuju2);
    });
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let infoSubmit = "";
    infoSubmit = "Data pemesanan berhasil ditambahkan";
    this.setState({
      infoSubmit,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("ID Pemesan: ", this.state.namaPemesan);
    console.log("ID Kendaraan: ", this.state.namaKendaraan);
    console.log("ID Penyetuju 1: ", this.state.namaPenyetuju1);
    console.log("ID Penyetuju 2: ", this.state.namaPenyetuju2);
    console.log("Status Persetujuan 1: ", this.state.statusPersetujuan1);
    console.log("Status Persetujuan 2: ", this.state.statusPersetujuan2);

    Axios.post("http://localhost:3001/tambah_pesanan", {
      nama_pemesan: this.state.namaPemesan,
      nama_kendaraan: this.state.namaKendaraan,
      nama_penyetuju_1: this.state.namaPenyetuju1,
      nama_penyetuju_2: this.state.namaPenyetuju2,
      status_persetujuan_1: this.state.statusPersetujuan1,
      status_persetujuan_2: this.state.statusPersetujuan2,
    }).then(this.validate());
  };

  render() {
    console.log("daftar nama pemesan render", this.state.daftarNamaPemesan);
    console.log("daftar nama kendaraan render", this.state.daftarMobil);
    console.log("daftar nama penyetuju 1 render", this.state.daftarPenyetuju1);
    console.log("daftar nama penyetuju 2 render", this.state.daftarPenyetuju2);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid row mt-3">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="form-group mt-3">
                <label>Nama Pemesan</label>
                <div>
                  <select
                    onChange={this.handleChange}
                    value={this.state.namaPemesan}
                    name="namaPemesan"
                  >
                    {this.state.daftarNamaPemesan.map((pemesan) => (
                      <option key={pemesan.ID_USER} value={pemesan.ID_USER}>
                        {pemesan.NAMA_USER}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group mt-3">
                <label>Nama Kendaraan</label>
                <div>
                  <select
                    onChange={this.handleChange}
                    value={this.state.namaKendaraan}
                    name="namaKendaraan"
                  >
                    {this.state.daftarMobil.map((kendaraan) => (
                      <option
                        key={kendaraan.ID_KENDARAAN}
                        value={kendaraan.ID_KENDARAAN}
                      >
                        {kendaraan.NAMA_KENDARAAN}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group mt-3">
                <label>Nama Penyetuju 1</label>
                <div>
                  <select
                    onChange={this.handleChange}
                    value={this.state.namaPenyetuju1}
                    name="namaPenyetuju1"
                  >
                    {this.state.daftarPenyetuju1.map((setuju1) => (
                      <option key={setuju1.ID_USER} value={setuju1.ID_USER}>
                        {setuju1.NAMA_USER}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group mt-3">
                <label>Nama Penyetuju 2</label>
                <div>
                  <select
                    onChange={this.handleChange}
                    value={this.state.namaPenyetuju2}
                    name="namaPenyetuju2"
                  >
                    {this.state.daftarPenyetuju2.map((setuju2) => (
                      <option key={setuju2.ID_USER} value={setuju2.ID_USER}>
                        {setuju2.NAMA_USER}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button className="btn btn-primary mt-3">Submit</button>
              <div>{this.state.infoSubmit}</div>
            </div>
            <div className="col-md-3 mt-2"></div>
          </div>
        </form>
      </div>
    );
  }
}
