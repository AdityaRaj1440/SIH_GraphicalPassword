import { decoy, arr } from "./Image";

import { default as URL } from "../Resources/ImageURL";
import { useNavigate } from "react-router-dom"
// console.log("arr1: ",arr)
const key = Object.keys(URL)
const FinalizePassword = ({ fn }) => {

    // console.log("decoy at finalize", decoy)
    const navigate = useNavigate()
    const gotarr = (e) => {
        e.preventDefault();
        // console.log("decoy at btn", decoy)
        if (arr.length === 5) {
            fn(true)
            navigate('/regpixel')
        }
        else {
            alert("select five images first")
        }

    }

    // const makeDecoys = () => {
    //     const decoy=[]

    //     for( let i= 0; i< key.length; i++)
    //     {
    //         const cat1=[]
    //         const newArr= URL[key[i]].filter((item)=> !arr.includes(item))
    //         for(let j=0; j<6; j++)
    //         {
    //             const n= (Math.floor(Math.random()*50))%newArr.length
    //             if(!decoy.includes(newArr[n]))
    //             decoy.push(newArr[n])
    //             // cat1.push(newArr[n])}
    //             newArr.slice(n,1)
    //         }
    //         // cat1=[]
    //     }
    //     console.log("decoy length:",decoy)
    // }

    return (
        <>
            <button onClick={gotarr}>Finalize Password</button>
        </>
    )
}

export default FinalizePassword