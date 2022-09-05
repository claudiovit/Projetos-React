import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Producs from './pages/Producs';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={<About /> } />
        <Route path="/products" element={<Producs /> } />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
