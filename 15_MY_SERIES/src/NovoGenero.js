import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const NovoGenero = () => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const onChange = (evt) => {
    setName(evt.target.value);
  };
  const save = () => {
    axios
      .post("/api/genres", {
        name,
      })
      .then((res) => {
        setSuccess(true);
      });
  };

  if(success) {
    return <Navigate to="/generos" />
  }

  return (
    <div className="container">
      <h1>Novo Genero</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            value={name}
            onChange={onChange}
            className="form-control"
            id="name"
            placeholder="Nome do Genêro"
          />
        </div>
        <button type="button" onClick={save} className="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NovoGenero;
