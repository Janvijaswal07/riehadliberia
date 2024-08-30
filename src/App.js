import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Staff from './pages/Staff'
import AboutUS from './pages/AboutUS';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Home from './pages/Home';
import News from './pages/News';
import Sponsor from './pages/Sponsor';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/about" element={<AboutUS/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/sponsor" element={<Sponsor/>} />
        <Route path="/news" element={<News/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
