import { useState } from 'react';
import './App.css';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Output = ({ selectedImg, setSelectedImg} ) => {
    const navigate = useNavigate()
    const shuffle = () => {
        let shuffArr = selectedImg
        shuffArr = shuffArr.sort(() => Math.random() - 0.5)
        setSelectedImg(shuffArr)
        console.log(shuffArr)
    }

    const submit = () => {
        let lis = []
        setSelectedImg(lis)
        return (
            navigate("/")
        )
    }

    return (
        <div className="App">
            <div>
            <ImageList sx={{
                width: 1000,
                height: 200
            }}
                cols={5}
                rowHeight={4}
            >
                {selectedImg.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            // className={index === selected ? "selected" : ""}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            </div>
            <div>
                <Button variant="contained" onClick={shuffle}>Shuffle</Button>
                <Button variant="contained" onClick={submit}>Reset to Login</Button>
            </div>
        </div>
    );
}
 
export default Output;