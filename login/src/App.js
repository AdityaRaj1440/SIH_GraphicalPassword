import './App.css';
import Login from './Login';
import './App.css';
import Navbar from './Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageGrid from './ImageGrid';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes >
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<ImageGrid />} />
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;