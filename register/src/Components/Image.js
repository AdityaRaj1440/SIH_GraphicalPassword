import {useState} from 'react'
const arr= []
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
       
    }
    

    return(
    <>
    <img src= {url} alt= "img1" width= "15%" onClick={addImage}/>
          &nbsp;&nbsp;
    </>
)
}
export default Image