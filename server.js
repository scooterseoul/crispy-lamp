const express = require("express");
const productsRoutes = require("./src/product/routes");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/products", productsRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
