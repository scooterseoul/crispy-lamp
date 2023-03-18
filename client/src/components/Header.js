import styles from "./Header.module.css";
import Logo from "../images/logo.png";
import Login from "../images/icons8-male-user-64.png";
import Slide from "./Slide";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.sliderMain}>
        <Slide />
      </div>
      <div className={styles.headerCont}>
        <div className={styles.logo}>
          <img src={Logo} className={styles.logopic} alt="logo"></img>
        </div>
        <div className={styles.login}>
          <img src={Login} alt="login" className={styles.loginimg}></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
