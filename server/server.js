const express = require("express");
const productsRoutes = require("./product/routes");
const app = express();
const port = 5000;
var cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/products", productsRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
