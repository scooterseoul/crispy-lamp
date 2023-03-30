import React, { useState } from "react";
import styles from "./CountrySelector.module.css";

const CountrySelector = ({ products, setFilteredProducts }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountrySelection = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    if (country) {
      const filtered = products.filter((p) => p.country === country);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };
  return (
    <div className={styles.dropCont}>
      <label htmlFor="country-select" className={styles.label}>
        Select:
      </label>
      <select
        id="country-select"
        className={styles.select}
        value={selectedCountry}
        onChange={handleCountrySelection}
      >
        <option className={styles.option} value="">
          All Countries
        </option>
        {products.map((product) => (
          <option key={product.id} value={product.country}>
            {product.country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
