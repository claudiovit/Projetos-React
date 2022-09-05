import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Product.css";

const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <div className="container">
        <div className="contentBox">
          <p>ID do Produto: {id}</p>
          {error && <p>Ocorreu um Erro...</p>}
          {loading && <p>Carregando...</p>}
          {product && (
            <div className="card">
              <h3 className="title">{product.name}</h3>
              <p className="img">{product.img}</p>
              <p className="description">{product.description}</p>
              <h2 className="price">R$: {product.price}</h2>
              {/* Nested Routes */}
              {/* <Link className="Detalhes" to={`/products/${product.id}`}>  
            </Link> */}
                <Link className="Detalhes" to={`/products/${product.id}/info`}>Mais Informaçoes</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
