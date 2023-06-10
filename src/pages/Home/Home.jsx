import styles from "./Home.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import { Link } from "react-router-dom";

function Home() {
  const { isAuthenticated, user } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) window.location.href = `/user/${user.username}`;
  });
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>House Bill Manager</h1>
      </div>
      <div className={styles.content}>
        <Link to="/login">
          <button className={styles.Button}>LOGIN</button>
        </Link>
        <Link to="/signup">
          <button className={styles.Button}>SIGNUP</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
