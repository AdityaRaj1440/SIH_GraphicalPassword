import React from 'react'
import { decoy, arr } from './Image'
import { useState } from 'react'

function Regpixel() {


    const [decoyArr, setDecoy] = useState(decoy)
    const [array, setArray] = useState(arr)
    return (
        <>
            <div style={{
                padding: "20px",
                textAlign: "center",
                fontSize: "20px"
            }}>
                Select Pixel positions from primary image

            </div>


            <img src={`${array[0]}`} />
            <img src={`${array[1]}`} />
            <img src={`${array[2]}`} />
            <img src={`${array[3]}`} />
            <img src={`${array[4]}`} />

        </>
    )
}

export default Regpixel