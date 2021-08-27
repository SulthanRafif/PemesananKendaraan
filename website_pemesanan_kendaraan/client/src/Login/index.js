import React, {useState} from 'react'
import Axios from "axios"

function Login() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [levelUser, setLevelUser] = useState('');

    return (
        <div className="App">
            <div className="Login">
                <h1>Register</h1>
                <label>Username</label>
                <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}} />
                <label>Password</label>
                <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/>
                <label>Level User</label>
                <select
                      onChange={(e) => {setLevelUser(e.target.value)}}
                      value="0"
                    >
                      <option value="0">Admin</option>
                      <option value="1">Penyetuju 1</option>
                      <option value="2">Penyetuju 2</option>
                    </select>
                <button>Register</button>
            </div> 
            <br/>
            <div className="Login">
                <h1>Login</h1>
                <label>Username</label>
                <input type="text"/>
                <label>Password</label>
                <input type="text"/>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login
