// import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/AllProducts";
import Header from "./components/Header";
// import mainpic from "./images/mainpic.png";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <Header />
      {/* <div>
        <img src={mainpic} className={styles.mainpic}></img>
      </div> */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
