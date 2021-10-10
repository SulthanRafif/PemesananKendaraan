import React, { useState } from "react";
import Register from "../Register";
import Login from "../Login";

const LoginRegister = ({ setIsAuth, onCreateLevel, onCreateIdUser }) => {
  const [register, setIsRegister] = useState(false);

  const eventSetRegister = () => {
    setIsRegister(true);
  };

  const eventSetLogin = () => {
    setIsRegister(false);
  };
  return (
    <div className="App text-center">
      {!register ? (
        <div>
          <Login
            setIsAuth={() => {
              setIsAuth(true);
            }}
            onCreateLevel={onCreateLevel}
            onCreateIdUser={onCreateIdUser}
          />
          <a onClick={eventSetRegister}>Register Akun</a>
        </div>
      ) : (
        <div>
          <Register />
          <br />
          <a onClick={eventSetLogin}>Login Akun</a>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
