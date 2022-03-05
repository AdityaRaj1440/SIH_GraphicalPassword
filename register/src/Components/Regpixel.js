import React from 'react'
import { decoy, arr } from './Image'
import { useState, useEffect } from 'react'

var pixels = require('image-pixels')
var getPixels = require('get-image-pixels')

function getGroup(x, y) {

    var img = document.getElementById("prime");

    var image = new SimpleImage(img);

    var w = image.getWidth()
    var h = image.getHeight()
    var low = 30
    var xw = w / low
    var yh = h / low

    var gx = parseInt((x / low))
    var gy = parseInt((y / low))
    gx = (gx === 0) ? 1 : gx
    gy = (gy === 0) ? 1 : gy
    console.log("groups: ", gx, gy)
}

function Regpixel() {



    const [show, setShow] = useState(false)
    const [decoyArr, setDecoy] = useState(decoy)
    const [array, setArray] = useState(arr)



    function getPos() {
        // setShow(true)
        let pic = document.getElementById("prime")
        //console.log(pic);
        let x = 0;
        let arr = [];
        let arrG = [];


        function getMousePosition(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            //console.log("x y", event.clientX, event.clientY)
            let x = (event.clientX - rect.left) * (1920 / 600);
            let y = (event.clientY - rect.top) * (1080 / 400);
            arr.push(x);
            arr.push(y);
            console.log("Coordinate x: " + x,
                "Coordinate y: " + y);
        }


        pic.addEventListener("mousedown", (e) => {
            if (x < 4) {
                x++;
                getMousePosition(pic, e);
            }
            if (x === 4) {

                for (var i = 0; i < 7; i += 2) {
                    getGroup(arr[i], arr[i + 1])
                }
                // console.log("X: ", arr[0], arr[2], arr[4], arr[6]);
                // console.log("Y: ", arr[1], arr[3], arr[5], arr[7]);

            }
        });
    }
    // function getGroup(x, y) {


    //      //var { data, width, height } = await pixels('/109666.jpg')
    //     var pic = document.getElementById("prime")

    //     var data = getPixels(pic) // returns a Uint8Array
    //     console.log(data)
    //      //console.log(data, width, height)
    // }


    return (
        <>
            <div style={{
                padding: "20px",
                textAlign: "center",
                fontSize: "20px"
            }}>
                Your selected sequence of images
            </div>


            <img id="i1" alt="image1" width="15%" src={`${array[0]}`} />
            <img id="i2" alt="image2" width="15%" src={`${array[1]}`} />
            <img id="i3" alt="image3" width="15%" src={`${array[2]}`} />
            <img id="i4" alt="image4" width="15%" src={`${array[3]}`} />
            <img id="i5" alt="image5" width="15%" src={`${array[4]}`} />

            <div style={{
                padding: "20px",
                textAlign: "center",
                fontSize: "20px"
            }}>

                <button onClick={() => {
                    setShow(true)
                    setTimeout(() => {
                        getPos()
                    }, 400);

                }}>Click to select position on primary image</button>
                {
                    !show ? <></> : <><img id="prime" alt="image1" src='/109666.jpg' /></>
                }


            </div>

        </>
    )
}

export default Regpixel