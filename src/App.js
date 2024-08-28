import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/staff" element={<div>Staff Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/donate" element={<div>Donate Page</div>} />
        <Route path="/sponsor" element={<div>sponsor Page</div>} />
        <Route path="/news" element={<div>News Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
