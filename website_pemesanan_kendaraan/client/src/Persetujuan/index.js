import React from "react";
import Axios from "axios";

const initialState = {
  namaPemesan: "",
  namaKendaraan: "",
  namaPenyetuju1: "",
  namaPenyetuju2: "",
  statusPersetujuan1: "1",
  statusPersetujuan2: "",
};

export default class Persetujuan extends React.Component {
  state = initialState;

  componentDidMount = () => {
    console.log("Component Did Mount Persetujuan");
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };
}
