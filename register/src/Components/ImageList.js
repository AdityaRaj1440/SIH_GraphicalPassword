import Image from './Image'
import url from '../Resources/ImageURL'
import { useState, useEffect } from 'react';
import { arr } from './Image';

const CatImage = ({ cat }) => {
  const len = url[cat].length
  const URL = url[cat]
  const [src, setSrc] = useState(0)

  useEffect(()=>{
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
  })

const changeImgList = () => {
  setSrc(src + 6)
  
  
}
  
    


  return (
    <>
      <h3 align="center">{cat}</h3>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Image url={URL[src % len]} />
        <Image url={URL[(src + 1) % len]} />
        <Image url={URL[(src + 2) % len]} />
        <Image url={URL[(src + 3) % len]} />
        <Image url={URL[(src + 4) % len]} />
        <Image url={URL[(src + 5) % len]} />
      </div>
      <div align="CENTER">
        <button type="button" onClick={changeImgList}>Show More</button>
      </div>

    </>
  )

}

export default CatImage