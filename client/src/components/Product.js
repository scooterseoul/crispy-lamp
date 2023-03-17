import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./Product.module.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Pop from "./Popup";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [country, setCountry] = useState("");
  const [image_url, setImage_url] = useState("");
  const [buttonPop, setButtonPop] = useState(false);

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
      setName(data[0].name);
      setPrice(data[0].price);
      setCountry(data[0].country);
      setImage_url(data[0].image_url);
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
  const submit = () => {
    confirmAlert({
      title: "Delete ???",
      message: "Are you sure you want to delete?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteProduct(),
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
    });
  };

  function selectProduct(id) {
    let item = product[id - 1];
    setName(item.name);
    setPrice(item.price);
    setCountry(item.country);
    setImage_url(item.image_url);
  }
  function updateUser() {
    let item = { name, price, country, image_url };
    console.warn("item", item);
    fetch(`http://localhost:5000/api/v1/products/edit/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        alert("success");
      });
    });
  }
  function refresh() {
    window.location.reload(false);
  }

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
                </div>
                <div>
                  <button onClick={() => setButtonPop(true)}>Update</button>
                  <Pop
                    trigger={buttonPop}
                    setTrigger={setButtonPop}
                    className="popup1"
                  >
                    <p className={styles.update}>Update...</p>
                    <div className={styles.input}>
                      <div>
                        <p className={styles.formlabel}>Name</p>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <p className={styles.formlabel}>Price</p>
                        <input
                          type="text"
                          value={price}
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        />
                      </div>
                      <p className={styles.formlabel}>Country</p>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                      />
                      <div>
                        <p className={styles.formlabel}>URL</p>
                        <input
                          type="text"
                          value={image_url}
                          onChange={(e) => {
                            setImage_url(e.target.value);
                          }}
                        />
                      </div>

                      <button
                        className={styles.submitbtn}
                        onClick={() => {
                          updateUser();
                          refresh();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </Pop>
                  <br />
                  <br />
                  {/* <button onClick={() => selectProduct(item.id)}>Update</button> */}
                  {/* <Link to={"/edit/" + item.id}>
                    <button className={styles.editbutton}>Edit</button>
                  </Link> */}
                </div>
                <div>
                  <button
                    className={styles.deletebutton}
                    onClick={() => submit(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="text"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <input
          type="text"
          value={image_url}
          onChange={(e) => {
            setImage_url(e.target.value);
          }}
        />
        <button onClick={updateUser}>Update User</button>
      </div> */}
      <Link to="/" className="button">
        Return to products
      </Link>
    </>
  );
};
export default Product;
