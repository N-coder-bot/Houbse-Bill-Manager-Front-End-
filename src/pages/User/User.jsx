import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import { useContext, useEffect } from "react";
import styles from "./User.module.css";
import ProductList from "../../components/ProductList/ProductList";
const renderContent = (isAuthenticated, user) => {
  if (isAuthenticated)
    return (
      <div className={styles.container}>
        <h1 className={styles.para}>
          Welcome,<span id={styles.username}>{user.username}</span>
        </h1>
        <h1 className={styles.productList}>PRODUCTS LIST</h1>
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
  const { isAuthenticated, user } = useContext(AuthContext);
  return <>{renderContent(isAuthenticated, user)}</>;
}

export default User;
