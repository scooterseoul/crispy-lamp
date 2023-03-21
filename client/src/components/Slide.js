import styles from "./Slide.module.css";
import slide1 from "../images/stick-with-me-sweets-chocolate-01-ht-jc-180207_16x9_992.jpeg";
import slide3 from "../images/HDpexels-marta-dzedyshko-2067420.jpg";
import slide4 from "../images/mainpic2.png";
import slide5 from "../images/HDpexels-adam-dubec-1595494.jpg";

const Slide = () => {
  return (
    <div className={styles.wave}>
      <div className={styles.slider}>
        <div className={styles.slides}>
          <img src={slide1} alt="slide1" className={styles.slide}></img>
          <img src={slide5} alt="slide5" className={styles.slide}></img>
          <img src={slide3} alt="slide3" className={styles.slide}></img>
          <img src={slide4} alt="slide4" className={styles.slide}></img>

          <img src={slide3} alt="slide3" className={styles.slide}></img>
        </div>
      </div>
    </div>
  );
};

export default Slide;
