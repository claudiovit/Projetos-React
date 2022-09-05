import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//  Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

// Components
import Navbar from './components/Navbar';

import './App.css';



function App() {
  return (
    <div className="App">
      <h1>React Route</h1>
      <BrowserRouter>
      {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About /> } />
          {/* Nested Route */}
          <Route path="/products/:id/info" element={<Info /> } />
          {/* Rota Dinamica */}
          <Route path="/products/:id" element={<Product /> } />
          {/* search */}
          <Route path="/search" element={<Search /> } />
          {/* 10 - Redirect */}
          <Route path="/company" element={<Navigate to="/about" /> } />
          {/* no math route - 404 */}
          <Route path="*" element={<NotFound /> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
