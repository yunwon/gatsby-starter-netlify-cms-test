import React from "react";
import styles from "./LearnMoreButton.module.scss";
import { FaChevronRight } from "react-icons/fa";

export const LearnMoreButton = ({ language }) => {
  return (
    <button className={styles.button}>
      {language === "Chinese" ? "学到更多" : "Learn More"}
      <FaChevronRight />
    </button>
  );
};
