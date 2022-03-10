import './App.css';
import Login from './Login';
import './App.css';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageGrid from './ImageGrid';
import { useState } from 'react';
import Output from './Output';

const App = () => {
  const [selectedImg, setSelectedImg] = useState([]);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes >
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<ImageGrid selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>} />
          <Route exact path="/output" element={<Output selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>} />
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;