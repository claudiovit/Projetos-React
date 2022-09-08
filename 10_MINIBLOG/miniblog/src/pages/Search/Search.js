import React from "react";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

import PostDetails from "../../components/PostDetails";
import { Link } from "react-router-dom";

import styles from "./Search.module.css";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  // const { documents: posts, loading } = useFetchDocuments('posts', {
  //   where: [['tags', 'array-contains', search]],
  // })
  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Nenhum post encontrado com {search}</p>
            <Link to="/posts/create" className="btn btn-dark">
              {" "}
              Criar Post
            </Link>
          </div>
        )}
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
