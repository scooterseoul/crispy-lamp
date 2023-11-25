import styles from "./Footer.module.css";
import MyPhoto from "../images/icons8-coffee-64.png";
import emailIcon from "../images/icons8-email-50.png";
import githubIcon from "../images/icons8-github-48.png";
import linkedInIcon from "../images/icons8-linkedin-50.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerNav}>
          <img src={MyPhoto} alt="me" className={styles.mePhoto}></img>
          <p className={styles.email}>Get in Touch</p>
          <div className={styles.thanksCont}>
            <p className={styles.thanks}>
              Thanks for visiting.
              <br />
              This site was created by C. Alexander.
              <br /> <br /> App icons supplied by{" "}
              <a href="https://icons8.com" target="_blank" rel="noreferrer">
                icons8
              </a>
            </p>
          </div>
          <div className={styles.iconCont}>
            {" "}
            <div className={styles.connectIcons}>
              <a
                href="https://github.com/scooterseoul"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={githubIcon}
                  className={styles.githubIcon}
                  alt="github"
                />
              </a>
              <p className={styles.iconName}>Github</p>
            </div>
            <div className={styles.connectIcons}>
              {" "}
              <a
                href="https://www.linkedin.com/in/claudette-alexander"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedInIcon}
                  alt="linkedin"
                  className={styles.linkedInIcon}
                />
              </a>
              <p className={styles.iconName}>LinkedIn</p>
            </div>
            <div className={styles.connectIcons}>
              <img
                src={emailIcon}
                alt="mail"
                className={styles.emailPic}
                onClick={() =>
                  (window.location = "mailto: scooterseoul@gmail.com")
                }
              />
              <p className={styles.iconName}>Email</p>
            </div>
          </div>
          {/* <div>
            <img
              src={emailIcon}
              alt="email"
              className={styles.connectIcons}
            ></img>
            <img
              src={githubIcon}
              alt="github"
              className={styles.connectIcons}
            ></img>
            <img
              src={linkedInIcon}
              alt="linked In"
              className={styles.connectIcons}
            ></img>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
