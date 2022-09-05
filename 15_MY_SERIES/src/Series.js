import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Series = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/series").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const deleteSerie = id => {
    axios
        .delete('/api/series/' + id)
        .then(res => {
            const filtrado = data.filter(item => item.id !== id);
            setData(filtrado);
        })
  }


  const renderizaLinha = record => {
    return (
      <tr key={record.id}>
        <td>{record.id}</td>
        <td>{record.name}</td>
        <td>
            <button className="btn btn-danger" onClick={() => deleteSerie(record.id)}>Remover</button>
            <Link to={'/series/' + record.id} className="btn btn-warning">Editar</Link>
        </td>
      </tr>
    );
  }

  if (data.length === 0) {
    return(
        <div className="container">
            <h1>Series</h1>
            <div><Link to='/series/novo' className="btn btn-primary" >Nova Serie</Link></div>
            <div className="alert alert-warning" role="alert">
                Nenhuma Serie Casdastrada!
            </div>
        </div>
    )
  }

  return (
    <div className="container">
      <h1>Series</h1>
      <div><Link to='/series/novo' className="btn btn-primary" >Nova Serie</Link></div>      
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Açôes</th>
          </tr>
        </thead>
        <tbody>
            {data.map(renderizaLinha)}
        </tbody>
      </table>
    </div>
  );
};

export default Series;
