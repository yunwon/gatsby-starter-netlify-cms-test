import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ title, icon, outlined, bigButton }) => {
  let buttonClass = classNames(
    styles.button,
    outlined && styles.outlined,
    bigButton && styles.bigButton
  );
  return (
    <button className={buttonClass}>
      {icon ? icon : null}
      <span>{title}</span>
    </button>
  );
};
