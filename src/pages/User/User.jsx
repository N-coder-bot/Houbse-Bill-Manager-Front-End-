/* eslint-disable react/prop-types */
import styles from "./User.module.css";
import { useParams } from "react-router-dom";
function User() {
  const { username } = useParams();
  return <div>{username}</div>;
}

export default User;
