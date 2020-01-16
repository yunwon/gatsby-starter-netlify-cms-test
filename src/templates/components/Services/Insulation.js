import React from "react";
import PropTypes from "prop-types";
import styles from "./insulation-page.module.scss";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BgImage from "../../../assets/services/insulation/hero.png";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";

const Section = ({ data }) => (
  <div>
    {data.map(item => (
      <div className={styles.wrapper}>
        <div className={styles.section} key={item.title}>
          <PreviewCompatibleImage
            imageInfo={{
              image: item.image,
              alt: item.title
            }}
            className={styles.image}
          />
          <div className={styles.text}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const InsulationPageTemplate = ({ title, subTitle, section }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      <Section data={section.sectionDetail} />
    </div>
  );
};

InsulationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  section: PropTypes.shape({
    sectionDetail: PropTypes.array
  })
};

export default InsulationPageTemplate;
