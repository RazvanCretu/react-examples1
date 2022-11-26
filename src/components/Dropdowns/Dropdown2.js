import React, { useEffect, useRef } from "react";
import {
  VscAccount,
  VscSettingsGear,
  VscTools,
  VscSignOut,
  VscArrowDown,
} from "react-icons/vsc";

import styles from "../../styles/Dropdowns/Dropdown2.module.css";

const DropdownMenu = ({ children, className, handleClickOutside }) => {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return <ul className={className}>{children}</ul>;
};

const Dropdown2 = ({ isOpen, handleSwitch }) => {
  const containerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      handleSwitch();
    }
  };

  const animate = (i) =>
    `${i % 2 === 0 ? "rotRight" : "rotLeft"} .5s ease-in ${0.25 * i}s forwards`;

  return (
    <div
      className={`${styles.Wrapper} ${isOpen ? styles.open : ""}`}
      ref={containerRef}
    >
      <button className={styles.Button} onClick={handleSwitch}>
        <span>
          <VscArrowDown />
        </span>
        Menu
      </button>

      {isOpen ? (
        <DropdownMenu
          className={styles.Menu}
          handleClickOutside={handleClickOutside}
        >
          <li style={{ animation: animate(0) }}>
            <span>
              <VscAccount />
            </span>
            Profile
          </li>
          <li style={{ animation: animate(1) }}>
            <span>
              <VscTools />
            </span>
            Build Tools
          </li>
          <li style={{ animation: animate(2) }}>
            <span>
              <VscSettingsGear />
            </span>
            Settings
          </li>
          <li style={{ animation: animate(3) }}>
            <span>
              <VscSignOut />
            </span>
            Log Out
          </li>
        </DropdownMenu>
      ) : null}
    </div>
  );
};

export default Dropdown2;
