import { useState } from "react";
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("")
    const navigate = useNavigate();

    const submit = () => {
        console.log(username)
        navigate("/login")
    }

    return (
        <div className="App">
            <h1>LOGIN</h1>
            <h1>Enter your username:</h1>
            <TextField 
            id="outlined-basic" label="Username" variant="outlined" type="text"
                onChange={(e) => {
                    setUsername(e.target.value)
                }} />
           
            <Button style={{
                margin:15
            }}
            variant="contained" onClick={submit}>Submit</Button>
        </div>
    );
}

export default Login;

