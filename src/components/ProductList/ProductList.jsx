import React, { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import axios from "axios";

function ProductList({ user }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/users/products",
          {
            withCredentials: true,
          }
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.productList}>
        {products.length != 0 ? (
          products.map((product) => (
            <li key={product._id} className={styles.productItem}>
              {product.name}
            </li>
          ))
        ) : (
          <p className={styles.para}>Please add atleast One Product </p>
        )}
      </ul>
    </div>
  );
}

export default ProductList;
