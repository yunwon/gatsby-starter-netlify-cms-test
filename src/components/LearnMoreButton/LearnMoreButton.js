import React from "react";
import styles from "./LearnMoreButton.module.scss";
import { FaChevronRight } from "react-icons/fa";

export const LearnMoreButton = () => {
  return (
    <button className={styles.button}>
      Learn More
      <FaChevronRight />
    </button>
  );
};
