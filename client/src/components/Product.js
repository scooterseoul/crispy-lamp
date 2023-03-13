import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Product.module.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = await fetch(
        `http://localhost:5000/api/v1/products/${id}`
      );
      if (fetchUrl.ok === false) {
        setIsNotFound(true);
        return;
      }
      const data = await fetchUrl.json();
      setProduct(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isNotFound) {
    return (
      <>
        <p className="error">Sorry! We can't find that restaurant.</p>
      </>
    );
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div>hello000</div>
      <ul className={styles.listCont}>
        {product.map((product) => {
          return (
            <div className={styles.cell}>
              <li key={product.id}>
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
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default Product;
