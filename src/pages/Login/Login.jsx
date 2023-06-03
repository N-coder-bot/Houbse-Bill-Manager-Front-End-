import styles from "./Login.module.css";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        username: username,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:8000/users/login/password",
        data,
        { withCredentials: true }
      );
      console.log(response);
      window.location.href = `/user/${response.data.user.username}`;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} id={styles.form}>
        <label htmlFor="username" className={styles.formItem}>
          USERNAME
        </label>
        <input
          type="text"
          name="username"
          id={styles.name}
          className={styles.formItem}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className={styles.formItem}>
          PASSWORD
        </label>
        <input
          type="password"
          name="password"
          id={styles.password}
          className={styles.formItem}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id={styles.login} className={styles.formItem}>
          LOGIN
        </button>
      </form>
    </div>
  );
}
export default Login;
