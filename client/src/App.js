// import styles from "./App.module.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/AllProducts";
import Header from "./components/Header";
import Product from "./components/Product";
import AddProducts from "./components/AddProducts";

const App = () => {
  return (
    <>
      <Header />

      <AddProducts />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        {/* <Route path="/" element={<AddProducts />} /> */}
      </Routes>
    </>
  );
};

export default App;
