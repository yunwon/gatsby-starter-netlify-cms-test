import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import Content, { HTMLContent } from "../components/Content";
import styles from "./insulation-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../assets/services/insulation/hero.png";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Section = ({ data }) => (
  <div>
    {data.map(sectionDetail => (
      <div className={styles.wrapper}>
        <div className={styles.section} key={sectionDetail.title}>
          <div className={styles.image}>
            <Img
              src={sectionDetail.image}
              fluid={sectionDetail.image.childImageSharp.fluid}
              alt={sectionDetail.title}
              style={{ borderRadius: 4 }}
            />
          </div>
          <div className={styles.text}>
            <h4>{sectionDetail.title}</h4>
            <p>{sectionDetail.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const InsulationPageTemplate = ({ title, subTitle, section }) => {
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

const InsulationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <InsulationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        section={post.frontmatter.section}
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
                fluid {
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
