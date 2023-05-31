/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
function Button(props) {
  const name = props.name;
  return <button>{name}</button>;
}

export default Button;
