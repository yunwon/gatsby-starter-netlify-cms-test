import React from "react";
import PropTypes from "prop-types";
import styles from "./healthyhomes.module.scss";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BgImage from "../../../img/services/healthyhomes/hero.png";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";

const HealthyHomesPageTemplate = ({ title, subTitle, standards, keyDates }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      {/* 01. standards */}
      <div className={styles.standards}>
        <div className={styles.inner}>
          <h2 className={styles.title}>{standards.title}</h2>
          <p className={styles.subtitle}>{standards.description}</p>
          <div className={styles.items}>
            {standards.icons.map(item => (
              <div>
                <div className={styles.iconWrapper}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: item.image,
                      alt: item.title
                    }}
                    className={styles.icon}
                  />
                </div>
                <div className={styles.text}>
                  {item.title && <h5>{item.title}</h5>}
                  {item.description && <p>{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
          <p className={styles.subtitle}>{standards.extraDescription}</p>
        </div>
      </div>
      {/* 02. key dates */}
      <div className={styles.keyDates}>
        <h2>{keyDates.title}</h2>
        <div className={styles.text}>
          {keyDates.list.map(item => (
            <div className={styles.paragraph}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HealthyHomesPageTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  standards: PropTypes.object,
  keyDates: PropTypes.object
};

export default HealthyHomesPageTemplate;
