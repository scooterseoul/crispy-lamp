import React from "react";
import styles from "./Popup.module.css";
import Closebtn from "../images/closebtn-90.png";

function Pop(props) {
  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.inner}>
        <img
          src={Closebtn}
          onClick={() => props.setTrigger(false)}
          className={styles.btn}
        />

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Pop;
