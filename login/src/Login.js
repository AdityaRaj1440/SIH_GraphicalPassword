import { useState } from "react";
import React from "react";
import ImageGrid from "./ImageGrid";
import Stack from '@mui/material/Stack';
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
            <h1>Login</h1>
            <h3>Enter your username</h3>
            <input type="text"
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

