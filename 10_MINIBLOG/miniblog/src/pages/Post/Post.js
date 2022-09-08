import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import styles from "./Post.module.css";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando Post...</p>}
      {post && (
        <>
          <h1 className={styles.title}>{post.title}</h1>
          <img className={styles.img} src={post.image} alt={post.title} />
          <p className={styles.body}>{post.body}</p>
          <h3>Este Post Trata Sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
