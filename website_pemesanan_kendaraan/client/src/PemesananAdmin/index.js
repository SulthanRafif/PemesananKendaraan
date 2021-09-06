import React from "react";
import Axios from "axios";

const initialState = {
  namaPemesan: "1",
  namaKendaraan: "1",
  namaPenyetuju1: "2",
  namaPenyetuju2: "3",
  statusPersetujuan1: "1",
  statusPersetujuan2: "1",
};

export default class PemesananAdmin extends React.Component {
  state = initialState;

  componentDidMount = () => {
    console.log("Component Did Mount");
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
    });
    this.validate();
  };

  render() {
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
                    <option value="1">Pemesan</option>
                    <option value="10">Pemesan Kedua</option>
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
                    <option value="1">Toyota Corolla</option>
                    <option value="2">Toyota Supra</option>
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
                    <option value="2">Penyetuju Satu</option>
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
                    <option value="3">Penyetuju Dua</option>
                    <option value="8">Penyetuju Dua B</option>
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
