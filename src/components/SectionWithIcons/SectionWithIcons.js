import React from "react";
import styles from "./SectionWithIcons.module.scss";
import whyChooseUs01 from "src/assets/home/whyChooseUs01.svg";

const RenderWhyChooseUs = ({ icon, title, description }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        {title && <h5>{title}</h5>}
        <p>{description}</p>
      </div>
    </div>
  );
};

const SectionWithIcons = ({ title, subtitle, descriptionArray, icons }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.items}>
          <RenderWhyChooseUs
            icon={<img src={icons[0]} alt="why choose us 01" />}
            description={descriptionArray[0]}
          />
          <RenderWhyChooseUs
            icon={<img src={icons[1]} alt="why choose us 02" />}
            description={descriptionArray[1]}
          />
          <RenderWhyChooseUs
            icon={<img src={icons[2]} alt="why choose us 03" />}
            description={descriptionArray[2]}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWithIcons;
