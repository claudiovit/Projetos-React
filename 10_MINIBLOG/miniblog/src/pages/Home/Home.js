import React, { useState } from "react";
import styles from "./Home.module.css";

// Hooks
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetails from "../../components/PostDetails";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { documents: posts, loading } = useFetchDocuments("posts");

  console.log(posts);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou Busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Nao foram encontrados Posts</p>
            <Link to="/posts/create" className="btn">
              Criar Primeiro Post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
