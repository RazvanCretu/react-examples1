import React, { useState, useRef } from "react";
import styles from "../../styles/Inputs/Input1.module.css";
import { VscSearch, VscArrowRight } from "react-icons/vsc";

const Input1 = () => {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className={styles.Wrapper}>
      <input
        type="text"
        className={`${styles.Input} ${inputVal ? styles.Open : ""}`}
        onChange={handleChange}
        value={inputVal}
        ref={inputRef}
      />
      {inputVal ? (
        <span className={styles.Button}>
          <VscArrowRight />
        </span>
      ) : (
        <span className={styles.Button} onClick={handleClick}>
          <VscSearch />
        </span>
      )}
    </div>
  );
};

export default Input1;
