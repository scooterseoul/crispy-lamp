const e = require("express");
const pool = require("../db");
const queries = require("./queries");

const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addProduct = (req, res) => {
  const { name, price, image_url, country, url_add } = req.body;

  pool.query(queries.checkName, [name], (error, results) => {
    if (results.rows.length) {
      res.send("Name already exists.");
    }
    pool.query(
      queries.addProduct,
      [name, price, image_url, country, url_add],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Product added successfully");
        console.log("Product added");
      }
    );
  });
};
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getProductById, [id], (error, results) => {
    const noProductFound = !results.rows.length;
    if (noProductFound) {
      res.send("No product found in DB.");
    }
    pool.query(queries.deleteProduct, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Product deleted successfully");
    });
  });
};

const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, image_url, country, url_add } = req.body;

  pool.query(queries.getProductById, [id], (error, results) => {
    const noProductFound = !results.rows.length;
    if (noProductFound) {
      res.send("No product found in DB");
    }
    pool.query(
      queries.updateProduct,
      [name, id, price, image_url, country, url_add],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("Product has been updated.");
      }
    );
  });
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
