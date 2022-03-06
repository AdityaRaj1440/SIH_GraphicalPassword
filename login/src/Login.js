import { useState } from "react";
import React from "react";
import ImageGrid from "./ImageGrid";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
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
            <TextField style={{
                margin:15 
            }}
            id="outlined-basic" label="Outlined" variant="outlined" type="text"
                onChange={(e) => {
                    setUsername(e.target.value)
                }} />
            {/* <h3>Select your first Image</h3>
            <ImageGrid /> */}
            <Button variant="contained" onClick={submit}>Submit</Button>
        </div>
    );
}

export default Login;

