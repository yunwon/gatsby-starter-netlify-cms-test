import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import styles from "./healthyhomes-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../img/services/healthyhomes/hero.png";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const HealthyHomesPageTemplate = ({
  title,
  subTitle,
  standards,
  keyDates
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
            {standards.icons.map(item => (
              <div className={styles.item}>
                <div className={styles.icon}>
                  {console.log(item.title)}
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: item.image,
                      alt: item.title
                    }}
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
            <div>
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
  data: PropTypes.object.isRequired
  // title: PropTypes.string,
  // subTitle: PropTypes.string,
  // standards: PropTypes.object
};

const HealthyHomesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <HealthyHomesPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        standards={frontmatter.standards}
        keyDates={frontmatter.keyDates}
      />
    </Layout>
  );
};

HealthyHomesPage.propTypes = {
  data: PropTypes.object
};

export default HealthyHomesPage;

export const HealthyHomesPageQuery = graphql`
  query HealthyHomesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "healthyhomes-page" } }) {
      frontmatter {
        title
        subTitle
        standards {
          title
          description
          icons {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
          extraDescription
        }
        keyDates {
          title
          list {
            title
            description
          }
        }
      }
    }
  }
`;
