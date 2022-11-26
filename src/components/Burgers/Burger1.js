import React from "react";
import styles from "../../styles/Burgers/Burger1.module.css";

const Burger1 = ({ isOpen, handleSwitch }) => {
  return (
    <div className={styles.Burger} onClick={handleSwitch}>
      <span className={`${isOpen ? styles.open : ""}`} />
      <span className={`${isOpen ? styles.open : ""}`} />
      <span className={`${isOpen ? styles.open : ""}`} />
    </div>
  );
};

export default Burger1;
