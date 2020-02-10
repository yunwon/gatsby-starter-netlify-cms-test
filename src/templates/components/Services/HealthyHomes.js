import React from "react";
import PropTypes from "prop-types";
import styles from "./HealthyHomes.module.scss";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BgImage from "../../../assets/services/insulation/hero.png";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";

const RenderIcons = ({ data }) => (
  <div className={styles.items}>
    {data.map(item => (
      <div key={item.title}>
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
          <h5>{item.title}</h5>
        </div>
      </div>
    ))}
  </div>
);

const RenderKeyDatesList = ({ data }) => (
  <div className={styles.text}>
    {data.map(item => (
      <div className={styles.paragraph} key={item.title}>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

const HealthyHomesPageTemplate = ({
  title,
  subTitle,
  standards,
  fiveStandards,
  keyDates,
  keyDatesList
}) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      {/* 01. standards */}
      <div className={styles.standards}>
        <div className={styles.inner}>
          <h2 className={styles.title}>{standards.title}</h2>
          <p className={styles.subtitle}>{standards.description}</p>
          <RenderIcons data={fiveStandards.iconList} />
          <p className={styles.subtitle}>{standards.extraDescription}</p>
        </div>
      </div>
      {/* 02. key dates */}
      <div className={styles.keyDates}>
        <h2>{keyDates.title}</h2>
        {/* <RenderKeyDatesList data={keyDatesList.list} /> */}
      </div>
    </div>
  );
};

HealthyHomesPageTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  standards: PropTypes.object,
  fiveStandards: PropTypes.PropTypes.shape({
    iconList: PropTypes.array
  }),
  keyDates: PropTypes.object,
  keyDatesList: PropTypes.shape({
    list: PropTypes.array
  })
};

export default HealthyHomesPageTemplate;
