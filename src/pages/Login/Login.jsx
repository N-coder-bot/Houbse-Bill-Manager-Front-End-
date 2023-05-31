import styles from "./Login.module.css";
import axios from "axios";
function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        username: event.target.username.value,
        password: event.target.password.value,
      };
      //   console.log(JSON.stringify(data));
      const response = await axios.post(
        "http://localhost:8000/users/user/login/password",
        data
      );
      console.log(response.data);
      window.location.href = `/user/${response.data.user.username}`;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} id={styles.form}>
        <label htmlFor="username" className={styles.formItem}>
          Username
        </label>
        <input
          type="text"
          name="username"
          id={styles.name}
          className={styles.formItem}
        />
        <label htmlFor="password" className={styles.formItem}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id={styles.password}
          className={styles.formItem}
        />
        <button type="submit" id={styles.login} className={styles.formItem}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
