import React from "react";
import PropTypes from "prop-types";
import styles from "./HealthyHomes.module.scss";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BgImage from "../../../assets/services/insulation/hero.png";
import { Button } from "../../../components/Button/Button";
import DateCountdown from "react-date-countdown-timer";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";
import { FaClock } from "react-icons/fa";
import { Link } from "gatsby";

const RenderIcons = ({ data }) => (
  <div className={styles.items}>
    {data.map(item => (
      <div key={item.title}>
        <Link to={`/${item.linkUri}`}>
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
        </Link>
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
        <div className={styles.countDown}>
          <FaClock />
          <DateCountdown dateTo={item.dueDate} />
        </div>
      </div>
    ))}
  </div>
);

const HealthyHomesPageTemplate = ({
  title,
  subTitle,
  standards,
  standardIcons,
  keyDatesTitle,
  keyDatesList,
  whatWeCanDo,
  contact,
  language
}) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      {/* 01. standards */}
      <div className={styles.standards}>
        <div className={styles.inner}>
          <h2 className={styles.title}>{standards.title}</h2>
          <p className={styles.subtitle}>{standards.description}</p>
          <div className={styles.items}>
            <RenderIcons data={standardIcons} />
          </div>
          <p className={styles.subtitle}>{standards.extraDescription}</p>
        </div>
      </div>
      {/* 02. key dates */}
      <div className={styles.keyDates}>
        <h2>{keyDatesTitle}</h2>
        <RenderKeyDatesList data={keyDatesList} />
      </div>
      {/* 03. what we can do for you */}
      <div className={styles.whatWeCanDo}>
        <div className={styles.inner}>
          <div className={styles.titleDiv}>
            <h2 className={styles.title}>{whatWeCanDo.title}</h2>
            <p className={styles.subtitle}>{whatWeCanDo.subtitle}</p>
          </div>
          <div>
            <p className={styles.description}>{whatWeCanDo.description}</p>
          </div>
        </div>
      </div>
      {/* 04. contact us */}
      <div className={styles.contactUs}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h2>{contact.title}</h2>
            <Link to={language === "English" ? `/contact` : `/contact/cn`}>
              <Button title={contact.button} bigButton />
            </Link>
          </div>
        </div>
        <div className={styles.contactImage}></div>
      </div>
    </div>
  );
};

HealthyHomesPageTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  standards: PropTypes.object,
  standardIcons: PropTypes.array,
  keyDatesTitle: PropTypes.string,
  keyDatesList: PropTypes.array,
  whatWeCanDo: PropTypes.object,
  contact: PropTypes.object,
  language: PropTypes.oneOf(["English", "Chinese"])
};

export default HealthyHomesPageTemplate;
