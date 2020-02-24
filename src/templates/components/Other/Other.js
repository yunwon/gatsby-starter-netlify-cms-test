import React from "react";
import PropTypes from "prop-types";
import styles from "./other-page.module.scss";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BgImage from "../../../assets/services/insulation/hero.png";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";

const OtherPageTemplate = ({ title, subTitle }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
    </div>
  );
};

OtherPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

export default OtherPageTemplate;
