import { useState, useEffect } from 'react';
import '../App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from './Grid';

const Output = ({ selectedImg, setSelectedImg }) => {

    const [status, setStatus] = useState(1)
    const [final, setFinal] = useState([])

    const navigate = useNavigate()


    const submit = () => {
        let lis = []
        setSelectedImg(lis)
        setFinal([])
        return (
            navigate("/login")
        )
    }

    const reset = () => {
        setStatus(1)
        setFinal([])
    }
    const addImage = (item) => {
        if (final.includes(item)) {
            alert("You've already selected this image!")

        }
        else {
            const inc = status + 1
            setStatus(inc)
            if (inc > 6) {
                alert("Can't select more than 5 images")
            }
            else {
                let tempchange = final
                tempchange.push(item)
                console.log(status + item + " selected")
                setFinal(tempchange)
                console.log(final)
            }
        }
    }

    return (
        <div className="App">
            <ImageList sx={{
                width: 1000,
                height: 230
            }}
                cols={5}
                rowHeight={4}
            >
                {selectedImg.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            className="selected"
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            loading="lazy"
                            onClick={() => addImage(item)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            
            <div>
            <Button style={{
                    margin:10
                }}
                variant="contained" onClick={submit}>Back to Login</Button>
                <Button style={{
                    margin:10
                }}
                variant="contained" onClick={reset}>Re-enter</Button>
                <Button style={{
                    margin:10
                }}
                variant="contained" >Submit</Button>
                
            </div>
        </div>
    );
}

export default Output;