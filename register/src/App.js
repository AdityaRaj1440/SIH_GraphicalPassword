import Register from "./Components/Register"
import Regpixel from "./Components/Regpixel"
import Home from "./Components/Home"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
const App = () => {

  const [gotarr, setGotarr] = useState(false)


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register fn={setGotarr} />} />
          <Route path="/regpixel" element={gotarr ? <Regpixel /> : <Navigate to='/register' />} />
        </Routes>
      </Router>


    </>
  )
}

export default App