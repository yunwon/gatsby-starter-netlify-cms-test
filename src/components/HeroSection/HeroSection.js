import React from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = ({ title, subtitle, bgImage }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
