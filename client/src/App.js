// import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/AllProducts";
import Header from "./components/Header";
import Product from "./components/Product";
import AddProducts from "./components/AddProducts";
// import AddPage from "./components/AddPage";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/add" element={<AddProducts />} />
        {/* <Route path="/" element={<AddProducts />} /> */}
      </Routes>
    </>
  );
};

export default App;
