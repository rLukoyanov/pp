import React from "react";
import styles from "./Button.module.scss";

export default function Button({
  children = "",
  className = "",
  disabled = false,
  type = "",
}) {
  let buttonStyles = styles.button;
  if (type === "outline") {
    buttonStyles = buttonStyles + ' ' + styles.outline;
  }
  return (
    <button className={`${buttonStyles} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
}
