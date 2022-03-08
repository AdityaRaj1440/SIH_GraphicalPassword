import { useState } from 'react'
import { default as URL } from '../Resources/ImageURL'
console.log(URL);
let decoy = []
const arr = []
const key = Object.keys(URL)
const Image = ({ url }) => {
    let element
    let elements = document.getElementsByTagName("img")
    for(let i=0; i<elements.length; i++)
    {
      
          if(!arr.includes(elements[i].id)&&elements[i].classList.contains("imgSelected"))
          {
              elements[i].classList.remove("imgSelected")
          }
          else if(arr.includes(elements[i].id)&&!elements[i].classList.contains("imgSelected"))
          {
            elements[i].classList.add("imgSelected")
          }
      
    }
    const [list, setList] = useState([])
    // console.log(list);
    if (arr.length > 4)
        makeDecoy();
    const addImage = () => {
        element= document.getElementById(url)
        let e
        for(let i=0; i<element.length; i++)
        {
            // if(element[i].hasAttribute('src')&&element[i].getAttribute('src')===url)
            //  {
            //      e= element[i]
            //      break
            //  }
        }
        console.log(element)
        if (!arr.includes(url) && arr.length !== 5) {
            arr.push(url)
            element.classList.add("imgSelected");
            setList(arr)
        }
        else if (arr.includes(url)) {
            arr.splice(arr.indexOf(url), 1)
            element.classList.remove("imgSelected")
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

            <img src={url} alt="img1" width="15%" height="15%" onClick={addImage} class= "img" id= {url} />
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

    // return (
    //     <>
    //         <h2>{decoy.length}</h2>
    //     </>
    // )
}
export default Image;
export { decoy, arr }