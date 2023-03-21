import styles from "./Header.module.css";
import Logo from "../images/newlog.png";
import Login from "../images/icons8-male-user-100.png";
import { Link } from "react-router-dom";
import circular from "../images/sidepichead.png";
import choc2 from "../images/HDpexels-george-dolgikh-2072163.jpg";
import choc3 from "../images/pexels-pixabay-209618.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerCont}>
        <div className={styles.logo}>
          <img src={Logo} className={styles.logopic} alt="logo"></img>
        </div>
        <div className={styles.login}>
          <img src={Login} alt="login" className={styles.loginimg}></img>
        </div>{" "}
        <div className={styles.explore}>
          ...explore the world of Sweetness!
          <div className={styles.worldChocCont}>
            <Link
              to="https://damecacao.com/world-chocolate-day/"
              target="_b
            "
            >
              <button className={styles.worldChoc}>World Chocolate Day!</button>
            </Link>
          </div>
        </div>
        <div className={styles.circular}>
          <img
            src={circular}
            className={styles.circularpic}
            alt="chocolate"
          ></img>
        </div>
        <div className={styles.choc2}>
          <img src={choc2} className={styles.choc2pic} alt="chocolate"></img>
        </div>
        <div className={styles.choc3}>
          <img src={choc3} className={styles.choc3pic} alt="chocolate"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
