import styles from "./AllProducts.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/v1/products/");
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <ul className={styles.listCont}>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <div className={styles.cell}>
                <Link to={"/products/" + product.id}>
                  <div className={styles.photoCont}>
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className={styles.photos}
                    />
                  </div>
                </Link>
                <div className={styles.infoCont}>
                  <div className={styles.name}>{product.name}</div>
                  <div className={styles.price}>{product.price}</div>
                  <div className={styles.country}>{product.country}</div>
                  <div className={styles.instock}>{product.instock}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default AllProducts;
