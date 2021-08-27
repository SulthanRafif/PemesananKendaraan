import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [levelUser, setLevelUser] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [level, setLevel] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      level_user: levelUser,
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].NAMA_USER);
        if (response.data[0].LEVEL_USER == 0) {
          setLevel("Pemesan");
        } else if (response.data[0].LEVEL_USER == 1) {
          setLevel("Penyetuju 1");
        } else if (response.data[0].LEVEL_USER == 2) {
          setLevel("Penyetuju 2");
        } else if (response.data[0].LEVEL_USER == 3) {
          setLevel("Admin");
        }
      }
    });
  };

  return (
    <div className="App text-center">
      <div className="Login">
        <h1>Register</h1>
        <div>
          <label>Username</label>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>Level User</label>
        </div>
        <div>
          <select
            onChange={(e) => {
              setLevelUser(e.target.value);
            }}
          >
            <option value="0">Pemesan</option>
            <option value="1">Penyetuju 1</option>
            <option value="2">Penyetuju 2</option>
            <option value="3">Admin</option>
          </select>
        </div>
        <br />
        <div>
          <button onClick={register}>Register</button>
        </div>
      </div>
      <br />

      <div className="Login">
        <h1>Login</h1>
        <div>
          <label>Username</label>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <button onClick={login}>Login</button>
        </div>
        <h1>{loginStatus}</h1>
        <h1>{level}</h1>
      </div>
    </div>
  );
}

export default Login;
