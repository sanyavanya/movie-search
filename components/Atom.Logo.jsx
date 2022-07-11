import styles from "./Atom.Logo.module.scss";

import React from "react";

function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles["logo__bold"]}>netflix</span>roulette
    </div>
  );
}

export default Logo;
