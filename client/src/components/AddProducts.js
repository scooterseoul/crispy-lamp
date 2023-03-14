import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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

    const response = await fetch("http://localhost:5000/api/v1/products/", {
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
      <div>Add Products</div>

      <form onSubmit={onFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            placeholder="$"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </label>
        <label>
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </label>
        <label>
          URL
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          ></input>
        </label>
        <button>Add</button>
      </form>
      <Link to="/" className="button">
        Return to products
      </Link>
    </>
  );
};
export default AddProducts;
