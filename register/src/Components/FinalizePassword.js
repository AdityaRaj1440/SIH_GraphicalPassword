import { makeDecoy } from "./Image";
import {default as URL} from "../Resources/ImageURL";
// console.log("arr1: ",arr)
const key= Object.keys(URL)
const FinalizePassword = () => {

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
        <button onClick={makeDecoy}>Finalize Password</button>
        </>
    )
}

export default FinalizePassword