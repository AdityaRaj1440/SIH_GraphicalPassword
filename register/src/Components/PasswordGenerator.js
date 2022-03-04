import Image from './Image'
import url from '../Resources/ImageURL'
import { useState } from 'react';

const len= url.length
const PasswordGenerator = () => {
    const [src, setSrc] = useState(0)
    
    return (
        <>
        <div>
        <h3>Password Generator</h3>
        <h4>Choose 5 images.</h4>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Image url= {url[src%len]} />
          <Image url= {url[(src+1)%len]} />
          <Image url= {url[(src+2)%len]} />
          <Image url= {url[(src+3)%len]} />
          <Image url= {url[(src+4)%len]} />
          <Image url= {url[(src+5)%len]} />
        </div>
        </div>
        <div align="CENTER">
        <button type="button" onClick={() =>setSrc(src+6)}>Show More</button>
        </div>
        </>
    )
}

export default PasswordGenerator