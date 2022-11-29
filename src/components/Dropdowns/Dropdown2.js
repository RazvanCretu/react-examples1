import React, { useEffect, useRef } from "react";
import {
  VscAccount,
  VscSettingsGear,
  VscTools,
  VscSignOut,
  VscArrowDown,
} from "react-icons/vsc";
import { CSSTransition } from "react-transition-group";

import styles from "../../styles/Dropdowns/Dropdown2.module.css";

const Menu = ({ children, handleClickOutside, menuRef }) => {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <ul className={styles.Menu} ref={menuRef}>
      {children}
    </ul>
  );
};

const Dropdown2 = ({ isOpen, handleSwitch }) => {
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target) &&
      isOpen
    ) {
      handleSwitch();
    }
  };

  const animate = (i) => `${0.2 * i}s`;

  return (
    <div className={styles.Wrapper} ref={containerRef}>
      <button className={styles.Button} onClick={handleSwitch}>
        <span>
          <VscArrowDown />
        </span>
        Menu
      </button>

      <CSSTransition
        nodeRef={menuRef}
        in={isOpen}
        timeout={1600}
        unmountOnExit
        classNames={{
          enterActive: styles.enter,
          enterDone: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <Menu handleClickOutside={handleClickOutside} menuRef={menuRef}>
          <li style={{ animationDelay: isOpen ? animate(0) : animate(3) }}>
            <span>
              <VscAccount />
            </span>
            Profile
          </li>
          <li style={{ animationDelay: isOpen ? animate(1) : animate(2) }}>
            <span>
              <VscTools />
            </span>
            Build Tools
          </li>
          <li style={{ animationDelay: isOpen ? animate(2) : animate(1) }}>
            <span>
              <VscSettingsGear />
            </span>
            Settings
          </li>
          <li style={{ animationDelay: isOpen ? animate(3) : animate(0) }}>
            <span>
              <VscSignOut />
            </span>
            Log Out
          </li>
        </Menu>
      </CSSTransition>
    </div>
  );
};

export default Dropdown2;
