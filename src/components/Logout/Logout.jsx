import styles from "./Logout.module.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
function Logout() {
  const { isAuthenticated } = useContext(AuthContext);
  const handleLogout = async () => {
    await axios.get("https://billeaseexpress.onrender.com/users/logout", {
      withCredentials: true,
    });
    window.location.href = "/";
  };
  return isAuthenticated ? (
    <button className={styles.logoutBtn} onClick={handleLogout}>
      LOGOUT
    </button>
  ) : (
    <></>
  );
}

export default Logout;
