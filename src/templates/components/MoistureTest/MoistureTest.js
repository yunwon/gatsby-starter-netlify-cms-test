import React from "react";
import PropTypes from "prop-types";
import styles from "./MoistureTest.module.scss";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BgImage from "../../../assets/services/insulation/hero.png";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";

const MoistureTestTemplate = ({ title, subTitle }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
    </div>
  );
};

MoistureTestTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

export default MoistureTestTemplate;
