import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";
import axios from "axios";

function ProductList({ user }) {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("grocery");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://hbm.onrender.com/users/products",
          {
            withCredentials: true,
          }
        );
        setProducts(response.data.products);
        setUserId(response.data.products[0].user);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: userId,
      name,
      price,
      category,
    };
    try {
      const response = await axios.post(
        "https://hbm.onrender.com/users/product/add",
        data,
        {
          withCredentials: true,
        }
      );

      // Update the products state with the newly added product
      setProducts([...products, response.data.product]);

      // Reset the form fields
      setName("");
      setPrice(0);
      setCategory("grocery");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  const handleDelete = async (e) => {
    const _id = e.target.id;
    const price = Number(e.target.name);
    const data = { _id, price };
    const updatedProducts = products.filter((product) => product._id !== _id);

    const response = await axios.delete(
      "https://hbm.onrender.com/users/product/delete",
      {
        data,
        withCredentials: true,
      }
    );
    setProducts(updatedProducts);
  };
  return (
    <div className={styles.container}>
      <div className={styles.productList}>
        <h2 className={styles.heading}>Product List</h2>
        {products.length !== 0 ? (
          <ul className={styles.productNameList}>
            {products.map((product) => (
              <li key={product._id} className={styles.productItem}>
                <div className={styles.productContainer}>
                  <span id={styles.productname}>{product.name}</span>
                  <span id={styles.productprice}>{product.price}₹</span>
                  <button
                    onClick={handleDelete}
                    id={product._id}
                    name={product.price}
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.para}>Please add at least one product</p>
        )}
      </div>
      <form className={styles.productForm} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Add Product</h2>
        <div className={styles.formItem}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Product Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            min="0"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="grocery">grocery</option>
            <option value="clothing">clothing</option>
            <option value="healthcare">healthcare</option>
            <option value="others">others</option>
          </select>
        </div>
        <button type="submit" className={styles.addBtn}>
          ADD
        </button>
      </form>
      <Link to="/Bill" id={styles.bill}>
        Calculate Bill
      </Link>
    </div>
  );
}

export default ProductList;
