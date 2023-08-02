import axios from "axios";
import styles from "./SignUp.module.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";
function Signup() {
  const [error, seterror] = useState(false);
  const { isAuthenticated, user } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) window.location.href = `/user/${user.username}`;
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    try {
      const response = await axios.post(
        "https://hbm.onrender.com/users/signup",
        data,
        {
          withCredentials: true,
        }
      );
      //add throw and catch statements later...
      alert("account created successfully! please login to continue...");
      window.location.href = `/login`;
    } catch (err) {
      seterror(true);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Signup!</h1>
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
      {error ? (
        <div className={styles.error}>
          Username Already Exists! Try Another one.
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Signup;
