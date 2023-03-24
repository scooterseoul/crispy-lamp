import React, { useState, useEffect, useMemo } from "react";
import styles from "./PriceFilter.module.css";
import { Link } from "react-router-dom";
import Product from "./Product";

const PriceFilter = ({}) => {
  const [price, setPrice] = useState([]);
  const [selectPrice, setSelectPrice] = useEffect();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/v1/products/");
      const data = await response.json();
      setSelectPrice(data);
    };
    fetchData();
  }, []);

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectPrice) {
      return price;
    }
    return price.filter((item) => item.price === selectPrice);
  }
  let filteredList = useMemo(getFilteredList, [selectPrice, price]);

  function handlePriceChange(event) {
    setSelectPrice(event.target.value);
  }

  return (
    //
    <>
      <div className="app">
        <div className="filter-container">
          <div>Filter by price:</div>
          <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handlePriceChange}
            >
              <option value="">All</option>
              <option value="lessThan10">Less than $10</option>
              <option value="tentofifty">$10~$50</option>
              <option value="over50">More than $50</option>
            </select>
          </div>
        </div>
        <div className="sport-list">
          {filteredList.map((element, id) => (
            <Product {...element} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default PriceFilter;
