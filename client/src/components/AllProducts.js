import styles from "./AllProducts.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Addbtn from "../images/grayplusborder.png";
import Footer from "./Footer";
import FavSweets from "../images/explorePic.png";
import wcdDTPic from "../images/chocday2.png";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/products`
      );
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
      <Header />
      <div className={styles.contentCont}>
        <div className={styles.addCont}>
          <div className={styles.addProduct}>
            <Link to="/add">
              <img src={Addbtn} className={styles.addbtnpic} alt="add"></img>
            </Link>
          </div>
          <div className={styles.wcdDT}>
            <Link
              to="https://www.keylink.org/knowledgebank/the-blog/what-is-world-chocolate-day-and-how-is-it-celebrated"
              target="_blank"
            >
              <img
                src={wcdDTPic}
                className={styles.wcdDTPic}
                alt="chocolateDay"
              ></img>
            </Link>
          </div>
        </div>
        <div className={styles.addFavSweets}>
          <img
            src={FavSweets}
            className={styles.favsweets}
            alt="favorites"
          ></img>
        </div>
        <div className={styles.introCont}>
          <p className={styles.intro}>
            Welcome! Here are some of our favorite chocolates, candies, and
            sweet things from around the globe. Feel free to add or share your
            own sweet favorites.
          </p>
        </div>
        <ul className={styles.listCont}>
          {products.map((product) => {
            return (
              <li key={product.id} className={styles.listitem}>
                <div className={styles.cell}>
                  <Link
                    to={"/products/" + product.id}
                    className={styles.linkpic}
                  >
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
                    {/* <div className={styles.price}>{product.price}</div> */}
                    <div className={styles.country}>{product.country}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default AllProducts;
