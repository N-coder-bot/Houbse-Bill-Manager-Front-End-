import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import { useContext, useEffect } from "react";
import styles from "./User.module.css";
import ProductList from "../../components/ProductList/ProductList";
const renderContent = (isAuthenticated, username) => {
  if (isAuthenticated)
    return (
      <div className={styles.container}>
        <h1 className={styles.para}>Welcome, {username} !</h1>
        <ProductList />
      </div>
    );
  else
    return (
      <div className={styles.container}>
        <h1 className={styles.para}>Please Login to continue.</h1>
        <Link to="/login">Continue to Login Page.</Link>
      </div>
    );
};
function User() {
  const { username } = useParams();
  const { isAuthenticated } = useContext(AuthContext);

  return <>{renderContent(isAuthenticated, username)}</>;
}

export default User;
