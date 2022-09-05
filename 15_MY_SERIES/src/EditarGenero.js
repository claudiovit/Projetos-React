import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

const EditarGenero = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      // nova funçao do react
      .get(`/api/genres/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
      });
  }, [id]);

  const onChange = (evt) => {
    setName(evt.target.value);
  };

  const save = () => {
    axios
      .put(`/api/genres/${id}`, {
        name,
      })
      .then((res) => {
        setSuccess(true);
      });
  };

  if (success) {
    return <Navigate to="/generos" />;
  }

  return (
    <div className="container">
      <h1>Editar Genero</h1>
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

export default EditarGenero;
