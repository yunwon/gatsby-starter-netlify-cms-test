import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import styles from "./insulation-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../assets/services/insulation/hero.png";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const InsulationPageTemplate = ({ title, subTitle, section }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      {section.sectionDetail.map(item => (
        <div className={styles.wrapper}>
          <div className={styles.section} key={item.title}>
            <div className={styles.image}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: item.image,
                  alt: item.title
                }}
              />
            </div>
            <div className={styles.text}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
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

const InsulationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <InsulationPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        section={frontmatter.section}
      />
    </Layout>
  );
};

InsulationPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default InsulationPage;

export const InsulationPageQuery = graphql`
  query InsulationPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "insulation-page" } }) {
      frontmatter {
        title
        subTitle
        section {
          sectionDetail {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
          }
        }
      }
    }
  }
`;
