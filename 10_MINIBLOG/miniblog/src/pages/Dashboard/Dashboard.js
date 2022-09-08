import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocumets } from "../../hooks/useFetchDocuments";


const Dashboard = () => {
  const {user} = useAuthValue();
  const uid = user.uid;

  const posts = [];




  return (
    <div className={styles.dash}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus Posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não há posts</p>
          <Link to="/posts/create" className="btn">Criar Primeiro Post</Link>
        </div>
      ) : (
        <div>
          <p>Tem Posts!</p>
          {/* {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <Link to={`/edit/${post.id}`}>Editar</Link>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
