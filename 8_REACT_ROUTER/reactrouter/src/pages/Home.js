import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// CSS
import "./Home.css";

const Home = () => {
  // 3 - Carregamento de Dados
  const url = "http://localhost:3000/products";
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {error && <p>Ocorreu um Erro...</p>}
        {loading && <p>Carregando...</p>}
        {items &&
          items.map((item) => (
            <li key={item.id}>
              {/* curso */}
              {/* <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link> */}
              {/* Rota Dinamica */}
              <Link className="Links" to={`/products/${item.id}`}>
                <h2>{item.name}</h2>
                <p>R$: {item.price}</p>
                <Link className="Detalhes" to={`/products/${item.id}`}>
                  Detalhes
                </Link>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
