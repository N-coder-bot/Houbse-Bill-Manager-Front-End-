import axios from "axios";
import styles from "./Signup.module.css";
function Signup() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    const response = await axios.post(
      "http://localhost:8000/users/signup",
      data,
      { withCredentials: true }
    );
    //add throw and catch statements later...
    alert("account created successfully! please login to continue...");
    window.location.href = `/login`;
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
        />
        <label htmlFor="password" className={styles.formItem}>
          PASSWORD
        </label>
        <input
          type="password"
          name="password"
          id={styles.password}
          className={styles.formItem}
        />
        <button type="submit" id={styles.login} className={styles.formItem}>
          SIGNUP
        </button>
      </form>
    </div>
  );
}

export default Signup;
