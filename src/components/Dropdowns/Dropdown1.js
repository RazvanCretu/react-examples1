import React from "react";
import {
  VscAccount,
  VscSettingsGear,
  VscTools,
  VscSignOut,
  VscArrowDown,
} from "react-icons/vsc";

import styles from "../../styles/Dropdowns/Dropdown1.module.css";

const Dropdown1 = ({ isOpen, handleSwitch }) => {
  return (
    <div className={`${styles.Wrapper} ${isOpen ? styles.open : ""}`}>
      <button className={styles.Button} onClick={handleSwitch}>
        <span>
          <VscArrowDown />
        </span>
        Menu
      </button>

      {isOpen ? (
        <div className={styles.Menu}>
          <button>
            <span>
              <VscAccount />
            </span>
            Profile
          </button>
          <button>
            <span>
              <VscTools />
            </span>
            Build Tools
          </button>
          <button>
            <span>
              <VscSettingsGear />
            </span>
            Settings
          </button>
          <button>
            <span>
              <VscSignOut />
            </span>
            Log Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown1;
