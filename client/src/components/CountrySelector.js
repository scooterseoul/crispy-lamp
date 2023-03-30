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
  const uniqueCountries = [
    ...new Set(products.map((product) => product.country)),
  ];
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

        {uniqueCountries
          .sort((a, b) => a.localeCompare(b))
          .map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CountrySelector;
