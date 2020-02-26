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
      <div className={styles.ourPurpose}>
        <div className={styles.inner}>
          <h2 className={styles.title}>{ourPurpose.title}</h2>
          <p className={styles.subtitle}>{ourPurpose.subtitle}</p>
          <div className={styles.items}>
            {ourPurpose.iconList.map(item => (
              <div className={styles.item}>
                {/* <div className={styles.icon}>{item.icon}</div> */}
                <div className={styles.text}>
                  {item.title && <h5>{item.title}</h5>}
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
