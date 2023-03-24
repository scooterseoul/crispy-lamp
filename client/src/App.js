// import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/AllProducts";
import Product from "./components/Product";
import AddProducts from "./components/AddProducts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/add" element={<AddProducts />} />
      </Routes>
    </>
  );
};

export default App;
