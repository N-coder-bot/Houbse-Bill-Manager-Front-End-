import { useEffect, useState } from "react";
import styles from "./BillCalculator.module.css";
import axios from "axios";
import Piechart from "../Piechart/Piechart";

function BillCalculator() {
  const [billAmount, setbillAmount] = useState(0);
  const [user, setuser] = useState({});
  const [categories, setCategories] = useState({});
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const billResponse = await axios.get(
          "http://localhost:8000/users/products/bill",
          {
            withCredentials: true,
          }
        );
        console.log("umm HAHAHAHA");
        setbillAmount(billResponse.data.user.billAmount);
        const updatedata = billResponse.data.user;
        setuser(updatedata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const getCategories = () => {
    const updateData = { grocery: 0, healthcare: 0, clothing: 0, others: 0 };
    // console.log(user.products);
    user.products.forEach((product) => {
      updateData[product.category] += product.price;
    });
    console.log(updateData);
    setCategories(updateData);
    setVisible(!visible);
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Total Amount: {billAmount}</h1>
        <button onClick={getCategories}>Bite me</button>
        {!visible ? <></> : <Piechart categories={categories} />}
      </div>
    </div>
  );
}

export default BillCalculator;
