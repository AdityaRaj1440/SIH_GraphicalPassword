import {useState} from 'react'
import {default as URL} from '../Resources/ImageURL'
console.log(URL);
const decoy=[]
const arr= []
const key= Object.keys(URL)
console.log(key);
const Image = ({url}) => { 
 

    const [list, setList]= useState([])
    console.log(list);

    const addImage = () => {
        if(!arr.includes(url)&&arr.length!==5)
        {
            arr.push(url)
            setList(arr)
        }
        else if(arr.includes(url))
        {
            arr.splice(arr.indexOf(url),1)
            setList(arr)
        }
        else
        {
            alert("You cannot select more than 5 elements")
        }
       
    }
    
    const restImage= () => {
        for( let i= 0; i< key.length; i++)
        {
            const newArr= URL[key[i]].filter((item)=> !list.includes(item))
            for(let j=0; j<6; j++)
            {
                const n= (Math.floor(Math.random()*50))%newArr.length
                if(!decoy.includes(newArr[n]))
                decoy.push(newArr[n])
                newArr.slice(n,1)
            }
        }
        

        
        
    }

    return(
    <>
    <img src= {url} alt= "img1" width= "15%" onClick={addImage}/>
          &nbsp;&nbsp;
          {restImage()}
          {console.log("decoy length:",decoy)}
    </>
)
}
export default Image;
export {arr}