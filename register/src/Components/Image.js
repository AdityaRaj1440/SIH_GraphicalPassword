import { useState } from 'react'
import { default as URL } from '../Resources/ImageURL'
console.log(URL);
let decoy = []
const arr = []
const key = Object.keys(URL)
const Image = ({ url }) => {


    const [list, setList] = useState([])
    // console.log(list);
    if (arr.length > 4)
        makeDecoy();
    const addImage = () => {
        if (!arr.includes(url) && arr.length !== 5) {
            arr.push(url)
            setList(arr)
        }
        else if (arr.includes(url)) {
            arr.splice(arr.indexOf(url), 1)
            setList(arr)
        }
        else {
            alert("You cannot select more than 5 elements")
        }

    }

    // const restImage= () => {
    //     for( let i= 0; i< key.length; i++)
    //     {
    //         const newArr= URL[key[i]].filter((item)=> !list.includes(item))
    //         for(let j=0; j<6; j++)
    //         {
    //             const n= (Math.floor(Math.random()*50))%newArr.length
    //             if(!decoy.includes(newArr[n]))
    //             decoy.push(newArr[n])
    //             newArr.slice(n,1)
    //         }
    //     }




    // }

    return (
        <>

            <img src={url} alt="img1" width="15%" onClick={addImage} />
            &nbsp;&nbsp;
            {/* {restImage()}
          {console.log("decoy length:",decoy)} */}
            {console.log(arr)}
        </>


    )
}



const makeDecoy = () => {
    // let decoy=[]

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {

            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));

            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    for (let i = 0; i < key.length; i++) {
        const cat1 = []
        const newArr = URL[key[i]].filter((item) => !arr.includes(item))
        for (let j = 0; j < 6; j++) {
            const n = (Math.floor(Math.random() * 50)) % newArr.length
            if (!decoy.includes(newArr[n]))
                decoy.push(newArr[n])
            else j--;
            // cat1.push(newArr[n])}
            newArr.slice(n, 1)
        }
        // cat1=[]
    }
    decoy = decoy.concat(arr)
    decoy = shuffleArray(decoy)
    console.log("decoy length:", decoy)
    // fn(decoy)

    return (
        <>
            <h2>{decoy.length}</h2>
        </>
    )
}
export default Image;
export { decoy, arr }