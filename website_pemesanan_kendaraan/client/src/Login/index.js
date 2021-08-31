import React from "react";
import Axios from "axios";
// import Auth from "../Auth/Auth";

const initialState = {
  usernameReg: "",
  passwordReg: "",
  levelUser: "0",

  usernameRegError: "",
  passwordRegError: "",

  username: "",
  password: "",
  setLevelUser: "",

  usernameError: "",
  passwordError: "",
};

export default class Login extends React.Component {
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

  validateDaftar = () => {
    let usernameRegError = "";
    let passwordRegError = "";

    let infoSubmitDaftar = "";

    if (!this.state.usernameReg) {
      usernameRegError = "Nama User Harus Diisi";
      infoSubmitDaftar = "";
    }
    if (!this.state.passwordReg) {
      passwordRegError = "Password Harus Diisi";
      infoSubmitDaftar = "";
    }

    if (usernameRegError || passwordRegError) {
      this.setState({
        infoSubmitDaftar,
        usernameRegError,
        passwordRegError,
      });
      return false;
    }
    infoSubmitDaftar = "Anda Berhasil Mendaftar";
    usernameRegError = "";
    passwordRegError = "";
    this.setState({
      infoSubmitDaftar,
      usernameRegError,
      passwordRegError,
    });
    return true;
  };

  handleSubmitDaftar = (event) => {
    event.preventDefault();
    const isValidDaftar = this.validateDaftar();
    if (isValidDaftar) {
      console.log("Username Registrasi: ", this.state.usernameReg);
      console.log("Password Registrasi: ", this.state.passwordReg);
      console.log("Level Registrasi: ", this.state.levelUser);

      Axios.post("http://localhost:3001/register", {
        level_user: this.state.levelUser,
        username: this.state.usernameReg,
        password: this.state.passwordReg,
      });
    }
  };

  validateLogin = () => {
    let usernameError = "";
    let passwordError = "";

    let infoSubmitLogin = "";

    if (!this.state.username) {
      usernameError = "Nama User Harus Diisi";
      infoSubmitLogin = "";
    }
    if (!this.state.password) {
      passwordError = "Password Harus Diisi";
      infoSubmitLogin = "";
    }

    if (passwordError || usernameError) {
      this.setState({
        infoSubmitLogin,
        usernameError,
        passwordError,
      });
      return false;
    }
    infoSubmitLogin = "Anda Berhasil Login";
    usernameError = "";
    passwordError = "";
    this.setState({
      infoSubmitLogin,
      usernameError,
      passwordError,
    });
    return true;
  };

  handleSubmitLogin = (event) => {
    event.preventDefault();
    const isValidLogin = this.validateLogin();
    if (isValidLogin) {
      console.log("Username Registrasi: ", this.state.username);
      console.log("Password Registrasi: ", this.state.password);

      let loginStatus = "";
      let setLevel = "";

      Axios.post("http://localhost:3001/login", {
        username: this.state.username,
        password: this.state.password,
      }).then((response) => {
        if (response.data.message) {
          loginStatus = response.data.message;
        } else {
          loginStatus = response.data[0].NAMA_USER;
          if (response.data[0].LEVEL_USER === 0) {
            setLevel = "Pemesan";
          } else if (response.data[0].LEVEL_USER === 1) {
            setLevel = "Penyetuju 1";
          } else if (response.data[0].LEVEL_USER === 2) {
            setLevel = "Penyetuju 2";
          } else if (response.data[0].LEVEL_USER === 3) {
            setLevel = "Admin";
            this.props.history.push("/dashboardAdmin");
          }
        }
        this.setState({
          loginStatus,
          setLevel,
        });
      });
    }
  };

  render() {
    return (
      <div className="App text-center">
        {/* <Auth setAuth={"true"} /> */}
        <div className="Login">
          <form onSubmit={this.handleSubmitDaftar}>
            <h1>Register</h1>
            <div>
              <label>Username</label>
            </div>
            <div>
              <input
                name="usernameReg"
                id="usernameReg"
                value={this.state.usernameReg}
                onChange={this.handleChange}
                type="text"
              />
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.usernameRegError}
            </div>
            <br />
            <div>
              <label>Password</label>
            </div>
            <div>
              <input
                name="passwordReg"
                id="passwordReg"
                value={this.state.passwordReg}
                onChange={this.handleChange}
                type="text"
              />
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordRegError}
            </div>
            <br />
            <div>
              <label>Level User</label>
            </div>
            <div>
              <select
                onChange={this.handleChange}
                value={this.state.levelUser}
                name="levelUser"
              >
                <option value="0">Pemesan</option>
                <option value="1">Penyetuju 1</option>
                <option value="2">Penyetuju 2</option>
              </select>
            </div>
            <br />
            <div>
              <button type="submit">Register</button>
            </div>
            <div style={{ fontSize: 15, color: "blue" }} className="mt-3">
              {this.state.infoSubmitDaftar}
            </div>
          </form>
        </div>
        <br />

        <div className="Login">
          <form onSubmit={this.handleSubmitLogin}>
            <h1>Login</h1>
            <div>
              <label>Username</label>
            </div>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.usernameError}
            </div>
            <br />
            <div>
              <label>Password</label>
            </div>
            <div>
              <input
                type="text"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
            <br />
            <div>
              <button type="submit">Login</button>
            </div>
            <div style={{ fontSize: 15, color: "blue" }} className="mt-3">
              {this.state.loginStatus}
            </div>
            <div style={{ fontSize: 15, color: "blue" }} className="mt-3">
              {this.state.setLevel}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
