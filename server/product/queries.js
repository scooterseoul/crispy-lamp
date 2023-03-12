const getProducts = "SELECT * FROM products";

const getProductById = "SELECT * FROM products WHERE id = $1";

const checkName = "SELECT a FROM products a WHERE a.name = $1";

const addProduct =
  "INSERT INTO products (name, price, instock, image_url, country) VALUES ($1, $2, $3, $4, $5)";

const deleteProduct = "DELETE FROM products WHERE id = $1;";

const updateProduct =
  "UPDATE products SET name = $1, price = $3, instock = $4, image_url = $5, country = $6 WHERE id = $2";

module.exports = {
  getProducts,
  getProductById,
  checkName,
  addProduct,
  deleteProduct,
  updateProduct,
};
