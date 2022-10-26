import React, { useState } from "react";

import InputArrow from "../../../images/input/inputArrow.svg";
import InputDownArrow from "../../../images/input/inputDownArrow.svg";

import styles from "./Input.module.scss";

export default function Input() {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div className={styles.inputContainer}>
      <div className={styles.label}>label</div>
      <div className={focused ? `${styles.outline} ${styles.focused}` : styles.outline}>
        <img alt="inputArrow" src={InputArrow} />
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className={styles.input}
          placeholder="placeholder"
          type="text"
        />
        <img alt="inputDownArrow" src={InputDownArrow} />
      </div>
      <div className={styles.hint}>hint text</div>
    </div>
  );
}
