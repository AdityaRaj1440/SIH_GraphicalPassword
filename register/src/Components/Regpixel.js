import React from 'react'
import { decoy, arr } from './Image'

import { useState, useEffect } from 'react'

let arrG = []
let arrG2 = []

function getGroup(x, y, array) {
    var url = arr[0]
    const corsImageModified = new Image();
    corsImageModified.crossOrigin = "Anonymous";
    corsImageModified.src = url + "?not-from-cache-please";
    // var img = document.getElementById("prime");

    const image = new SimpleImage(corsImageModified);

    var w = image.getWidth()
    var h = image.getHeight()
    var low = 60
    var xw = w / low
    var yh = h / low

    var gx = parseInt((x / low))
    var gy = parseInt((y / low))
    gx = (gx === 0) ? 1 : gx
    gy = (gy === 0) ? 1 : gy
    console.log("groups: ", gx, gy)
    array.push(gx)
    array.push(gy)

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
        let y = 0;
        let arr = [];
        let arr2 = [];



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

        function getMousePosition2(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            //console.log("x y", event.clientX, event.clientY)
            let x = (event.clientX - rect.left) * (1920 / 600);
            let y = (event.clientY - rect.top) * (1080 / 400);
            arr2.push(x);
            arr2.push(y);
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
                    getGroup(arr[i], arr[i + 1], arrG)
                }
                x++
                alert("reselect pixel positions to confirm password")

            }
            if (x === 5) {
                if (y < 4) {
                    y++
                    getMousePosition2(pic, e)
                }
                if (y === 4) {
                    for (var i = 0; i < 7; i += 2) {
                        getGroup(arr2[i], arr2[i + 1], arrG2)
                    }
                    y++
                }
                if (y === 5) {
                    for (var i = 0; i < 8; i += 1) {
                        if (arrG[i] !== arrG2[i]) {
                            arr = []
                            x = 0
                            arr2 = []
                            y = 0
                            alert("pixel positions do not match previous attempt")
                            break
                        }
                    }
                    for (var i = 0; i < 7; i += 2) {
                        console.log("final groups: ", arrG[i], arrG[i + 1])
                    }
                }

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
                    !show ? <></> : <><img id="prime" alt="image1" src={`${arr[0]}`} /></>
                }


            </div>

        </>
    )
}

export default Regpixel