import Image from './Image'
import url from '../Resources/ImageURL'
import { useState } from 'react';

const CatImage = ({ cat }) => {
  const len = url[cat].length
  const URL = url[cat]
  const [src, setSrc] = useState(0)



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
        <button type="button" onClick={() => setSrc(src + 6)}>Show More</button>
      </div>

    </>
  )

}

export default CatImage