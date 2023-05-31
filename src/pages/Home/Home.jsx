import Button from "../../components/Button/Button";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>House Bill Manager</h1>
      </div>
      <div className={styles.content}>
        <Link to="/login">
          <Button name="LOGIN" />
        </Link>
        <Link to="/signup">
          <Button name="SIGNUP" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
