import styles from "./Slide.module.css";
import slide1 from "../images/HDpexels-george-dolgikh-2072163.jpg";
import slide2 from "../images/HDpexels-lisa-fotios-918328.jpg";
import slide3 from "../images/HDpexels-marta-dzedyshko-2067420.jpg";
import slide4 from "../images/mainpic2.png";
import slide5 from "../images/HDpexels-adam-dubec-1595494.jpg";

const Slide = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={styles.slides}>
          <img src={slide4} alt="slide4" className={styles.slide}></img>
          <img src={slide1} alt="slide1" className={styles.slide}></img>
          <img src={slide5} alt="slide5" className={styles.slide}></img>

          <img src={slide3} alt="slide3" className={styles.slide}></img>

          <img src={slide4} alt="slide4" className={styles.slide}></img>
          {/* <img src={slide2} alt="slide2" className={styles.slide}></img> */}
        </div>
        {/* <div className={styles.overlay}>This is a test</div> */}
      </div>
    </div>
  );
};

export default Slide;
