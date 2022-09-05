import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Badge, Label } from "reactstrap";

const InfoSerie = () => {
  const { id } = useParams();
  const [form, setForm] = useState({});
  const [success, setSuccess] = useState(false);
  const [mode, setMode] = useState("EDIT");
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState('');

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      // nova funçao do react
      .get(`/api/series/${id}`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        setForm(res.data);
      });
  }, [id]);



  useEffect(() => {
    axios.get("/api/genres").then((res) => {
      setGenres(res.data.data);
      const genres = res.data.data
      const encontrado = genres.find(value => data.genre === value.name)
      if (encontrado) {
        setGenreId(encontrado.id)
      }
    });
  }, [data]);

  // Custon Header
  const masterHeader = {
    height: "50vh",
    minHeight: "500px",
    backgroundImage: `url(${data.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const onChange = (field) => (evt) => {
    setForm({
      ...form,
      [field]: evt.target.value,
    });
  };

  const seleciona = value => () => {
    setForm({
      ...form,
      status: value,
    });
  }

  const save = () => {
    axios.put(`/api/series/${id}`, {
      ...form,
      genre_id: genreId,
    })
      .then((res) => {
      setSuccess(true);
    });
  };

  if (success) {
    // return <Navigate to="/series" />;
  }

  return (
    <div>
      <header style={masterHeader}>
        <div className="h-100 " style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="h-100 container">
            <div className="row h-100 align-items-center">
              <div className="col-3">
                <img
                  className="img-fluid img-thumbnail"
                  src={data.poster}
                  alt={data.name}
                />
              </div>
              <div className="col-8">
                <h1 className="font-weight-light text-white">{data.name}</h1>
                <div className="lead text-white">
                  { data.status === 'ASSISTIDO' && <Badge color="success">Assistido</Badge> }
                  { data.status === 'PARA_ASSISTIR' && <Badge className="text-dark" color="warning">Para Assistir</Badge> }
                  <Badge className="text-dark" color="info">
                    Gênero: {data.genre}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <button className="btn btn-warning" onClick={() => setMode("EDIT")}>
          Editar
        </button>
      </div>
      {mode === "EDIT" && (
        <div className="container">
          <h1>Editar Serie</h1>
          <pre>{JSON.stringify(form)}</pre>
          <button className="btn btn-danger" onClick={() => setMode("INFO")}>
            Cancelar
          </button>
          <form>
            <div className="mb-3">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                value={form.name}
                onChange={onChange("name")}
                className="form-control"
                id="name"
                placeholder="Nome da Serie"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name">Comentarios</label>
              <input
                type="text"
                value={form.comments}
                onChange={onChange("comments")}
                className="form-control"
                id="name"
                placeholder="Comentario"
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="name">Generos</Label>
              <select className="form-control" onChange={onChange("genre_id")} value={genreId}>
                {genres.map((genre) => (
                  <option
                    key={genre.id}
                    value={genre.id}
                  >
                    {genre.name}{" "}
                  </option>
                ))}
              </select>
              {/* <Input name="select" type="select" onChange={onChange('genre')} >
                { genres.map(genre => <option key={genre.id} value={genre.id} select={genre.id === form.genre}>{genre.name}  </option> )}
              </Input> */}
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="assistido"
                value="ASSISTIDO"
                 
                onClick={seleciona("ASSISTIDO")}
              />
              <label className="form-check-label" htmlFor="assistido">
                Assistido
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="paraAssistir"
                value="PARA_ASSISTIR" 
                onClick={seleciona("PARA_ASSISTIR")}
              />
              <label className="form-check-label" htmlFor="paraAssistir">
                Para Assistir
              </label>
            </div>
            <button type="button" onClick={save} className="btn btn-primary">
              Salvar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default InfoSerie;
