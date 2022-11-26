import React, { useState } from "react";
import styles from "../styles/Container.module.css";

const Container = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitch = () => setIsOpen(!isOpen);

  const updateChildrenWithProps = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      isOpen,
      handleSwitch,
    });
  });

  return <div className={styles.Container}>{updateChildrenWithProps}</div>;
};

export default Container;
