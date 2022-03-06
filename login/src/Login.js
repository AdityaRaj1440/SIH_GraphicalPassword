import { useState } from "react";
import React from "react";
import ImageGrid from "./ImageGrid";

const Login = () => {
    const [username, setUsername] = useState("")

    const submit = () => {
        console.log(username)
        setUsername("")
    }

    return (
        <div className="App">
            <h1>Login</h1>
            <h3>Enter your username</h3>
            <input type="text"
                onChange={(e) => {
                    setUsername(e.target.value)
                }} />
            <h3>Select your first Image</h3>
            <ImageGrid />
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default Login;

