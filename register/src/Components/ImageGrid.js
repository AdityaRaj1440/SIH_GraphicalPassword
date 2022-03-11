import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Grid from './Grid';


//let element
const ImageGrid = ({ selectedImg, setSelectedImg }) => {
    let lis = itemData.slice(0, 5)
    const [index, setIndex] = useState(0);
    const [status, setStatus] = useState(1)
    const [selection, setSelection] = useState(lis)

    useEffect(()=>{
        
        let arr= []
        for(let i=0; i<selectedImg.length; i++)
        {
            arr.push(selectedImg[i].img)
        }

        let elements = document.getElementsByTagName("img")
        console.log("first: ",elements[0].getAttribute("src"))
        if(arr.includes(String(elements[0].getAttribute("src"))))
        console.log("guess what")
        console.log("img:",arr)
        console.log(elements[0].getAttribute("src"))
        for(let i=0; i<elements.length; i++)
        {
              if(!arr.includes(elements[i].getAttribute("src").slice(0,elements[i].getAttribute("src").indexOf('?')))&&elements[i].classList.contains("imgSelected"))
              {
                  elements[i].classList.remove("imgSelected")
              }
              else if(arr.includes(elements[i].getAttribute("src").slice(0,elements[i].getAttribute("src").indexOf('?')))&&!elements[i].classList.contains("imgSelected"))
              {
                elements[i].classList.add("imgSelected")
              }
          
        }
      })
    

    const navigate = useNavigate()

    const submit = () => {
        let lis = []
        setSelectedImg(lis)
        return (
            navigate("/login")
        )
    }
    const prev = () => {
        if (index > 5) {

            //const tempIndex = index - 5
            setSelection(itemData.slice(index - 10, index - 5))
            setIndex(index - 5)

        }
        console.log(index)
        console.log(itemData.slice(index - 10, index - 5))

    }
    const output = () => {
        if (status < 6) {
            alert("You didn't select enough images for output")
        } else {
            let shuffArr = selectedImg.slice()
            shuffArr = shuffArr.sort(() => Math.random() - 0.5)
            setSelectedImg(shuffArr)
            console.log(selectedImg)
            return (
                navigate("/output")
            )
        }
    }


    const next = () => {
        if (index <= 15) {
            // console.log(index)
            // const tempIndex = index + 5
            setSelection(itemData.slice(index, index + 5))
            setIndex(index + 5)
            console.log(index)
        }
        console.log(itemData.slice(index, index + 5))
    }
    const addImage = (item) => {

        
        let elements = document.getElementsByTagName("img")
        let element= elements[1]
        let index=-1
        for(let i=0; i<elements.length; i++)
         { 
             //console.log("got it:", element.getAttribute("src").slice(0,element.getAttribute("src").indexOf('?'))==item.img)
            // if(elements[i].getAttribute("src").slice(0,element.getAttribute("src").indexOf('?'))==item.img)
            // {
            //     console.log("got it")
            //   element= elements[i]
            //   console.log(element)
            // }
        }
        // element= document.getElementById(item.img)
        if (selectedImg.includes(item)) {

            // if(element.classList.contains("imgSelected"))
            //   {
            //     element.classList.remove("imgSelected")
            //   }
            let tempchange = selectedImg
            // element.classList.remove("imgSelected")
            //tempchange.splice(item, 1)
            tempchange = tempchange.filter(value => value !== item)
            setSelectedImg(tempchange)
            const inc = status - 1
            setStatus(inc)
        }
        else {
            const inc = status + 1
            setStatus(inc)
            if (inc > 6) {
                alert("Can't select more than 5 images")
            }
            else {
            //     if(!element.classList.contains("imgSelected"))
            //   {
            //     element.classList.add("imgSelected")
            //   }
                // element.classList.add("imgSelected");
                let tempchange = selectedImg
                tempchange.push(item)
                console.log(status + item.title + " selected")
                setSelectedImg(tempchange)
                console.log(selectedImg)
            }
        }
    }

    const reset = () => {
        let lis = []
        setSelectedImg(lis)
        setStatus(1)
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
                {selection.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            className="selected"
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            onClick={() => addImage(item)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            {console.log(selectedImg)}

            <div>
                <Button style={{
                    margin:10
                }}
                variant="contained" onClick={prev}>Previous</Button>
                <Button style={{
                    margin:10
                }}
                variant="contained" onClick={next}>Next</Button>
                <Button style={{
                    margin:10
                }}
                variant="contained" onClick={submit}>Reset to Login</Button>
                <Button style={{
                    margin:10
                }}
                variant="contained" onClick={output}>Go to output</Button>
                <Button style={{
                    margin:10
                }}
                variant="contained" onClick={reset}>Reset elements</Button>
            </div>
            {/* <Grid selectedImg={selectedImg} /> */}
            <div>
                

            </div>

        </div>


    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
];

export default ImageGrid;