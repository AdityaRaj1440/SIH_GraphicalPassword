import { useState, useEffect } from 'react';
import '../App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from './Grid';

const Output = ({ selectedImg, setSelectedImg }) => {

    const navigate = useNavigate()
    const shufflestupid = () => {
        let shuffArr = selectedImg.slice()
        shuffArr = shuffArr.sort(() => Math.random() - 0.5)
        setSelectedImg(shuffArr)
        console.log(selectedImg)
    }

    const submit = () => {
        let lis = []
        setSelectedImg(lis)
        return (
            navigate("/login")
        )
    }

   

    return (
        <div className="App">
            <Grid selectedImg={selectedImg} />
            
            <div>
                <Button variant="contained" onClick={shufflestupid}>Shuffle</Button>
                <Button variant="contained" onClick={submit}>Reset to Login</Button>
                
            </div>
        </div>
    );
}

export default Output;