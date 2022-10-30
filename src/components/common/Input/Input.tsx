import React, { useState } from "react";

import InputArrow from "../../../images/input/inputArrow.svg";
import InputDownArrow from "../../../images/input/inputDownArrow.svg";

import styles from "./Input.module.scss";

export default function Input({
  status = "default",
  disabled = false,
  leftIcon = false,
  rightIcon = false,
}) {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  let changeStyles = styles.outline;
  let inputStyles = styles.input;

  switch (status) {
    case "default":
      changeStyles = styles.outline;
      break;
    case "error":
      changeStyles = styles.error;
      break;
    case "success":
      changeStyles = styles.success;
      break;
  }
  if (disabled === true) {
    changeStyles = styles.disabled;
  }

  if (leftIcon === true) {
    inputStyles = inputStyles + " " + styles.left;
  }
  if (rightIcon === true) {
    inputStyles = inputStyles + " " + styles.right;
  }

  return (
    <div className={styles.inputContainer}>
      <div className={styles.label}>label</div>
      <div
        className={
          focused
            ? `${styles.outline} ${styles.focused}`
            : `${styles.outline} ${changeStyles}`
        }
      >
        {leftIcon ? <img alt="inputArrow" src={InputArrow} /> : <></>}
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className={inputStyles}
          placeholder="placeholder"
          type="text"
          disabled={disabled}
        />
        {rightIcon ? <img alt="inputDownArrow" src={InputDownArrow} /> : <></>}
      </div>
      <div className={styles.hint}>hint text</div>
    </div>
  );
}
