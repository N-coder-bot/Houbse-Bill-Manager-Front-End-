import styles from "./Bill.module.css";
import { AuthContext } from "../../AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Bill() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const renderContent = (isAuthenticated) => {
    if (isAuthenticated)
      return (
        <div className={styles.container}>
          <h1 className={styles.title}>
            Your {monthNames[new Date().getMonth()]} Month Bill
          </h1>
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

  const { isAuthenticated } = useContext(AuthContext);

  return <>{renderContent(isAuthenticated)}</>;
}

export default Bill;
