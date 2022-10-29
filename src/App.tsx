import React from "react";
import Input from "./components/common/Input/Input";

import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <h2>Test</h2>
      <h3>Test</h3>
      <h4>Test</h4>
      <h5>Test</h5>
      <body>
        Test
        <div className={styles.bodySm}>Test</div>
        <div className={styles.bodyXs}>Test</div>
      </body>
      <div className={`${styles.block} ${styles.elevetion2}`}></div>
      <div className={`${styles.block} ${styles.elevetion4}`}></div>
      <div className={`${styles.block} ${styles.elevetion8}`}></div>
      <div className={`${styles.block} ${styles.elevetion16}`}></div>
      <div className={`${styles.block} ${styles.elevetion24}`}></div>
      <Input status="default" />
      <Input status="error" />
      <Input status="success" />
      <Input status="success" disabled />
    </div>
  );
}

export default App;
