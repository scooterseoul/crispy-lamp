import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Login from "../images/icons8-male-user-64.png";
import Cart from "../images/cart.png";
import mainpic from "../images/mainpic2.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={mainpic} className={styles.mainpic}></img>
      </div>
      <div className={styles.headerCont}>
        <div className={styles.logo}>
          <img src={Logo} className={styles.logopic}></img>
        </div>
        <div className={styles.search}>Search</div>
        <div className={styles.login}>
          <img src={Login} className={styles.loginimg}></img>
        </div>
        <div className={styles.cart}>
          <img src={Cart} className={styles.cartimg}></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
