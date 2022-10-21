import Image from "next/image";
import React from "react";

import InputArrow from "../../../public/input/inputArrow.svg";
import InputDownArrow from "../../../public/input/inputDownArrow.svg";

import styles from "./Input.module.scss";

export default function Input() {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.label}>label</div>
      <div className={styles.outline}>
        <Image src={InputArrow} />
        <input className={styles.input} placeholder="placeholder" type="text" />
        <Image src={InputDownArrow} />
      </div>
      <div className={styles.hint}>hint text</div>
    </div>
  );
}
