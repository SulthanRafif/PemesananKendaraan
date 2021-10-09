import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setIsAuth, onCreateLevel, onCreateIdUser }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [level, setLevel] = useState("");

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
        onCreateLevel(response.data[0].LEVEL_USER);
        onCreateIdUser(response.data[0].ID_USER);
        if (response.data[0].LEVEL_USER === 3) {
          history.push({
            pathname: "/dashboardAdmin",
            state: { detail: response.data[0].ID_USER },
          });
        } else if (
          response.data[0].LEVEL_USER === 1 ||
          response.data[0].LEVEL_USER === 2
        ) {
          history.push("/dashboardPenyetuju");
        }
      }
    });
  };

  return (
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
  );
};

export default Login;
