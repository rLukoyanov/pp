import React from "react";

import InputArrow from "../../../images/input/inputArrow.svg";
import InputDownArrow from "../../../images/input/inputDownArrow.svg";

import styles from "./Input.module.scss";

export default function Input() {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.label}>label</div>
      <div className={styles.outline}>
        <img src={InputArrow} />
        <input className={styles.input} placeholder="placeholder" type="text" />
        <img src={InputDownArrow} />
      </div>
      <div className={styles.hint}>hint text</div>
    </div>
  );
}
