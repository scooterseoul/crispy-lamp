import styles from "./Header.module.css";
import Logo from "../images/logoWHBG.png";
// import Login from "../images/icons8-male-user-100.png";
import { Link } from "react-router-dom";

import EmailIcon from "../images/emailIcon.png";
import GreenTop from "../images/test.png";
import wcd from "../images/testbtm.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerCont}>
        <div className={styles.logo}>
          <img src={Logo} className={styles.logopic} alt="logo"></img>
        </div>
        <div className={styles.email}>
          <img
            src={EmailIcon}
            alt="login"
            className={styles.emailPic}
            onClick={() => (window.location = "mailto: scooterseoul@gmail.com")}
          ></img>
        </div>
        <div className={styles.grtophalf}>
          <img src={GreenTop} alt="explore" className={styles.greenTop}></img>
        </div>
        <div className={styles.wcdCont}>
          <Link
            to="https://www.keylink.org/knowledgebank/the-blog/what-is-world-chocolate-day-and-how-is-it-celebrated"
            target="_blank"
          >
            <img src={wcd} alt="explore" className={styles.wcdpic}></img>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
