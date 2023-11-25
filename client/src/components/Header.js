import styles from "./Header.module.css";
import Logo from "../images/logoWHBG.png";
// import { Link } from "react-router-dom";
import EmailIcon from "../images/emailIcon.png";
import GreenTop from "../images/Screen Shot 2023-11-23 at 9.19.06 PM.png";
// import wcd from "../images/testbtm.png";
import HeroLandscape from "../images/Screen Shot 2023-11-25 at 6.03.11 PM.png";

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
        <div className={styles.mainPicCont}>
          <div className={styles.grtophalf}>
            <img src={GreenTop} alt="explore" className={styles.greenTop}></img>
          </div>
          <div className={styles.heroLand}>
            <img
              src={HeroLandscape}
              alt="explore"
              className={styles.heroLandPic}
              loop={false}
            ></img>
          </div>
        </div>
        {/* <div className={styles.wcdCont}>
          <Link
            to="https://www.keylink.org/knowledgebank/the-blog/what-is-world-chocolate-day-and-how-is-it-celebrated"
            target="_blank"
          >
            <img src={wcd} alt="explore" className={styles.wcdpic}></img>
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
