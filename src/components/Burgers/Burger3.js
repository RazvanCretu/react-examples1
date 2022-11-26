import React from "react";
import styles from "../../styles/Burgers/Burger3.module.css";

const Burger3 = ({ isOpen, handleSwitch }) => {
  return (
    <div className={styles.Burger} onClick={handleSwitch}>
      <span className={`${isOpen ? styles.open : ""}`} />
      <span className={`${isOpen ? styles.open : ""}`} />
      <span className={`${isOpen ? styles.open : ""}`} />
      <span className={`${isOpen ? styles.open : ""}`} />
      <span className={`${isOpen ? styles.open : ""}`} />
    </div>
  );
};

export default Burger3;
