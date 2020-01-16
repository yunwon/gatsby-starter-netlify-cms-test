import React from "react";
import PropTypes from "prop-types";
import styles from "./ourworks-page.module.scss";
import HeroSection from "../../../../components/HeroSection/HeroSection";
import BgImage from "../../../../assets/services/insulation/hero.png";
import PreviewCompatibleImage from "../../../../components/PreviewCompatibleImage";

const Works = ({ data }) => (
  <div>
    {data.map(workDetail => (
      <div className={styles.wrapper}>
        <div className={styles.section} key={workDetail.title}>
          <PreviewCompatibleImage
            imageInfo={{
              image: workDetail.image,
              alt: workDetail.title
            }}
            className={styles.image}
          />

          <div className={styles.text}>
            <h4>{workDetail.title}</h4>
            <h5>
              <span>{workDetail.year}</span>
              {workDetail.company}
            </h5>
            <p>{workDetail.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const OurWorksPageTemplate = ({ title, subTitle, works }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      <Works data={works.workDetail} />
    </div>
  );
};

OurWorksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  works: PropTypes.shape({
    workDetail: PropTypes.array
  })
};

export default OurWorksPageTemplate;
