import React from "react";
import Header from "./Header";
import Generos from "./Generos";
import NovoGenero from "./NovoGenero";
import EditarGenero from "./EditarGenero";
import Series from "./Series";
import NovaSerie from "./NovaSerie";
import InfoSerie from "./InfoSerie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  return <div className="container"><h1>Home</h1></div>;
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/generos" element={<Generos />} />
        <Route exact path="/generos/novo" element={<NovoGenero />} />
        <Route exact path="/generos/:id" element={<EditarGenero />} />
        <Route exact path="/series" element={<Series />} />
        <Route exact path="/series/novo" element={<NovaSerie />} />
        <Route exact path="/series/:id" element={<InfoSerie />} />
      </Routes>
    </Router>
  );
}

export default App;
