import styles from "./Login.module.css";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const { isAuthenticated, user } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) window.location.href = `/user/${user.username}`;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        username: username,
        password: password,
      };
      // https://house-bill-manager-production.up.railway.app
      const response = await axios.post(
        "https://hbm.onrender.com/users/login/password",
        data,
        { withCredentials: true, data: "include" }
      );
      console.log(response);
      window.location.href = `/user/${response.data.user.username}`;
    } catch (err) {
      console.log(err);
      seterror(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login!</h1>

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
      {error ? (
        <div className={styles.error}>
          Either Username or Password Entered is incorrect!
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Login;
