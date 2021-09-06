import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const history = useHistory();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [levelUser, setLevelUser] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    setLevelUser("0");
    // console.log("Tampilkan Level User Register Dari UseEffect ", levelUser);
  }, []);

  const register = () => {
    console.log("Username Register: ", usernameReg);
    console.log("Password Register: ", passwordReg);
    console.log("Level User Register: ", levelUser);
    Axios.post("http://localhost:3001/register", {
      level_user: levelUser,
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    console.log("Username Login: ", username);
    console.log("Password Login: ", password);
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].NAMA_USER);
        setLevel(response.data[0].LEVEL_USER);
        setIsAuth(true);
        history.push("/dashboardAdmin");
      }
    });
  };

  return (
    <div className=" App text-center">
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
            type="password"
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
          </select>
        </div>
        <br />
        <div>
          <button onClick={register} type="submit">
            Register
          </button>
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
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <button onClick={login} type="submit">
            Login
          </button>
        </div>
        <div style={{ fontSize: 15, color: "blue" }} className="mt-3">
          {loginStatus}
        </div>
        <div style={{ fontSize: 15, color: "blue" }} className="mt-3">
          {level}
        </div>
      </div>
    </div>
  );
};

export default Login;
