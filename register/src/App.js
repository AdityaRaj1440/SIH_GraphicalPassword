import Register from "./Components/Register"
import Regpixel from "./Components/Regpixel"
import Logpixel from "./Components/Logpixel"
import Home from "./Components/Home"
import Login from './Components/Login';
import ImageGrid from './Components/ImageGrid';
import Output from './Components/Output';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
const App = () => {

  const [gotarr, setGotarr] = useState(false)
  const [gotseq, setGotseq] = useState(false)
  const [user, setUser] = useState("")
  const [selectedImg, setSelectedImg] = useState([]);
  const [decoy, setDecoy] = useState([])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register fn={setGotarr} fnuser={setUser} />} />
          <Route path="/regpixel" element={gotarr ? <Regpixel user={user} /> : <Navigate to='/register' />} />
          <Route path="/logpixel" element={gotseq ? <Logpixel /> : <Navigate to='/login' />} />
          <Route exact path="/login" element={<Login fn={setDecoy} />} />
          <Route exact path="/imageSelection" element={decoy.length === 30 ? <ImageGrid arr={decoy}
            selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> : <></>} />
          <Route exact path="/output" element={<Output selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} />
        </Routes>
      </Router>


    </>
  )
}

export default App