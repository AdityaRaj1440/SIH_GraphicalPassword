/* global SimpleImage */

import React from 'react'
import { decoy, arr } from './Image'

import { useState } from 'react'

var arrG = []
var arrG2 = []
var array = []
var array2 = []
var indicator = 0
var k = 0;
function Regpixel() {

    const [show, setShow] = useState(false)
    const [btn, setBtn] = useState(true)
    const [btn2, setBtn2] = useState(false)
    const [decoyArr, setDecoy] = useState(decoy)
    const [oarr, setOarray] = useState(arr)
    const [group1, setGroup1] = useState([])
    const [group2, setGroup2] = useState([])

    function getPos(array, group) {

        var pic = document.getElementById("prime")

        var flag = 0

        function getMousePosition(canvas, event, array) {
            let rect = canvas.getBoundingClientRect();
            //console.log("x y", event.clientX, event.clientY)
            let x = (event.clientX - rect.left) * (1920 / 600);
            let y = (event.clientY - rect.top) * (1080 / 400);
            array.push(x);
            array.push(y);
            console.log("Coordinate x: " + x,
                "Coordinate y: " + y);
        }

        function getGroup(x, y, array) {
            var url = arr[0]
            const dimg = new Image();
            dimg.crossOrigin = "Anonymous";
            dimg.src = url + "?not-from-cache-please";

            // let canvas = document.createElement("canvas");
            // let context = canvas.getContext("2d");
            // canvas.width = dimg.width;
            // canvas.height = dimg.height;
            // context.drawImage(dimg, 0, 0);
            // var test = context.getImageData(10, 10, 50, 50)
            //console.log("testing getImageData", test)
            //console.log("cors friendly image:", dimg)

            const image = new SimpleImage(dimg);

            var w = image.getWidth()
            var h = image.getHeight()
            console.log("testing simple Image :", w, h)
            var low = 60

            var gx = parseInt((x / low))
            var gy = parseInt((y / low))
            gx = (gx === 0) ? 1 : gx
            gy = (gy === 0) ? 1 : gy
            console.log("groups: ", gx, gy)
            array.push(gx)
            array.push(gy)

        }

        const pos = (e) => {
            if (k < 4) {
                k++;
                getMousePosition(pic, e, array);
            }
            if (k === 4) {

                for (var i = 0; i < 7; i += 2) {
                    getGroup(array[i], array[i + 1], group)
                }

                setBtn2(true)
                k = 0
                pic.removeEventListener("mousedown", pos)
                if (indicator === 0) {
                    setGroup1(arrG)
                }
                if (indicator === 1) {
                    setGroup2(arrG2)
                }
                indicator++
            }
        }

        pic.addEventListener("mousedown", pos)
        if (indicator === 2) {
            checkReselct()
        }
    }


    function checkReselct() {
        for (var i = 0; i < 8; i += 1) {
            if (arrG[i] !== arrG2[i]) {
                array = []
                k = 0
                array2 = []
                arrG = []
                arrG2 = []
                setBtn(true)
                setBtn2(false)
                alert("pixel positions do not match previous attempt")
                break
            }
        }
        for (var i = 0; i < 7; i += 2) {
            console.log("final groups: ", arrG[i], arrG[i + 1])
        }
    }


    return (
        <>
            <div style={{
                padding: "20px",
                textAlign: "center",
                fontSize: "20px"
            }}>
                Your selected sequence of images
            </div>


            <img id="i1" alt="image1" width="15%" src={`${oarr[0]}`} />
            <img id="i2" alt="image2" width="15%" src={`${oarr[1]}`} />
            <img id="i3" alt="image3" width="15%" src={`${oarr[2]}`} />
            <img id="i4" alt="image4" width="15%" src={`${oarr[3]}`} />
            <img id="i5" alt="image5" width="15%" src={`${oarr[4]}`} />

            <div style={{
                padding: "20px",
                textAlign: "center",
                fontSize: "20px"

            }}>
                {!btn ? <></> :
                    <button onClick={() => {
                        setShow(true)
                        setTimeout(() => {
                            getPos(array, arrG)
                            setBtn(false)
                        }, 400);

                    }}>Click to select position on primary image</button>
                }
                {
                    !show ? <></> : <><img id="prime" alt="image1" src={`${arr[0]}`} /></>
                }

                {!btn2 ? <></> :
                    <button onClick={() => {

                        setTimeout(() => {
                            getPos(array2, arrG2)
                        }, 400);

                    }}>Click to reselect pixel positions to confirm</button>
                }


            </div>

        </>
    )
}

export default Regpixel