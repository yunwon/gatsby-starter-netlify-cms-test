import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { FaChevronRight } from "react-icons/fa";

export const Button = ({ title, icon, outlined, bigButton, arrow }) => {
  let buttonClass = classNames(
    styles.button,
    outlined && styles.outlined,
    bigButton && styles.bigButton
  );
  return (
    <button className={buttonClass}>
      {icon ? icon : null}
      <span>{title}</span>
      {arrow ? <FaChevronRight className={styles.arrow} /> : null}
    </button>
  );
};
