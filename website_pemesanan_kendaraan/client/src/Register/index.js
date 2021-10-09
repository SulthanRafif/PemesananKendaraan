import React, { useState, useEffect } from "react";
import Axios from "axios";

const Register = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [levelUser, setLevelUser] = useState("");

  const [statusRegister, setStatusRegister] = useState("");

  const register = () => {
    console.log("Username Register: ", usernameReg);
    console.log("Password Register: ", passwordReg);
    console.log("Level User Register: ", levelUser);
    setStatusRegister(`Username ${usernameReg} berhasil didaftarkan`);
    Axios.post("http://localhost:3001/register", {
      level_user: levelUser,
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    setLevelUser("1");
  }, []);

  return (
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
      <div>{statusRegister}</div>
    </div>
  );
};

export default Register;
