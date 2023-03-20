import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./AddProducts.module.css";
import Logo from "../images/logo.png";
import addprod from "../images/addprod.png";
import Backbtn from "../images/icons8-back-arrow-100.png";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [image_url, setImage_url] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");

  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const body = { name, price, country, image_url };

    const response = await fetch("http://localhost:5000/api/v1/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      setIsError(true);
      setErrorStatus(response.status);
    } else {
      setIsLoading(false);
      navigate("/");
    }
  };
  if (isError) {
    return (
      <>
        <p className="no-product">
          Error creating a product! Sorry. (error status {errorStatus})
        </p>
        <Link to="/" className="button">
          Return to products
        </Link>
      </>
    );
  }

  return (
    <>
      <div>
        <div className={styles.prodlogo}>
          <Link to="/">
            <img src={Logo} className={styles.prodlogopic} alt="logo"></img>
          </Link>
        </div>
        <div className={styles.addtext}>
          <img src={addprod} className={styles.addProd} alt="add"></img>
        </div>

        <div className={styles.outer}>
          <form onSubmit={onFormSubmit} className={styles.addCont}>
            <p className={styles.formlabel}>Name</p>
            <input
              type="text"
              name="name"
              value={name}
              className={styles.prodinput}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <p className={styles.formlabel}>Price</p>

            <input
              type="number"
              name="price"
              placeholder="$"
              value={price}
              className={styles.prodinput}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <p className={styles.formlabel}>Country</p>

            <input
              type="text"
              name="country"
              value={country}
              className={styles.prodinput}
              onChange={(e) => setCountry(e.target.value)}
            ></input>
            <p className={styles.formlabel}>URL</p>

            <input
              type="text"
              name="image_url"
              value={image_url}
              className={styles.prodinput}
              onChange={(e) => setImage_url(e.target.value)}
            ></input>
            <br />
            <button className={styles.addbtn}>Add</button>
          </form>
        </div>
        <Link to="/" className="button">
          <img src={Backbtn} className={styles.backbtn} alt="back"></img>
        </Link>
      </div>
    </>
  );
};
export default AddProducts;
