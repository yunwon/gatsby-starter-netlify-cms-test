import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.scss";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BgImage from "../../../assets/services/insulation/hero.png";
import Logo from "../../../assets/logo.svg";
import SectionWithIcons from "../../../components/SectionWithIcons/SectionWithIcons";
import About01 from "../../../assets/about/01.png";
import About02 from "../../../assets/about/02.png";
import About03 from "../../../assets/about/03.png";

const AboutPageTemplate = ({ title, subTitle, description, ourPurpose }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      <div className={styles.aboutUs}>
        <img src={Logo} alt="Logo" />
        <div>
          <p>{description}</p>
        </div>
      </div>
      <SectionWithIcons
        title="Our Purpose"
        subtitle={ourPurpose.description}
        descriptionArray={[
          ourPurpose.ourPurpose01.description,
          ourPurpose.ourPurpose02.description,
          ourPurpose.ourPurpose03.description
        ]}
        icons={[About01, About02, About03]}
      />
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  ourPurpose: PropTypes.object
};

export default AboutPageTemplate;
