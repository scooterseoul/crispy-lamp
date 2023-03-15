import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./Product.module.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  const navigate = useNavigate();

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

  const deleteProduct = async () => {
    try {
      const deleteProduct = await fetch(
        `http://localhost:5000/api/v1/products/${id}`,
        { method: "DELETE" }
      );
      navigate("/");
      console.log(deleteProduct);
    } catch (err) {
      console.error(err.message);
    }
  };

  if (isNotFound) {
    return (
      <>
        <p className="error">Sorry! We can't find that product.</p>
      </>
    );
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <ul className={styles.listCont}>
        {product.map((item) => {
          return (
            <li key={item.id}>
              <div className={styles.cell}>
                <div className={styles.photoCont}>
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className={styles.photos}
                  />
                </div>

                <div className={styles.infoCont}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.price}>{item.price}</div>
                  <div className={styles.country}>{item.country}</div>
                  <div className={styles.instock}>{item.instock}</div>
                </div>

                <button
                  className={styles.deletebutton}
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <Link to="/" className="button">
        Return to products
      </Link>
    </>
  );
};
export default Product;
