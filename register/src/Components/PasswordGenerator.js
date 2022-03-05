import CatImage from './ImageList'
import FinalizePassword from './FinalizePassword'
import { useState } from 'react'
const PasswordGenerator = ({ fn }) => {

    // const [arr, setArr] = useState([])
    // function arrSet(arr) {
    //     setArr(arr)
    // }
    return (
        <>
            <div>
                <h3>Password Generator</h3>
                <h4>Choose 5 images.</h4>
                <CatImage cat="Movies" />
                <br /><br />
                <CatImage cat="Series" />
                <br /><br />
                <CatImage cat="Sceneries" />
                <br /><br />
                <CatImage cat="Animations" />
                <br /><br />
                <CatImage cat="Fauna" />
                <br /><br />
                <FinalizePassword fn={fn} />
            </div>
        </>
    )
}

export default PasswordGenerator