import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import Content, { HTMLContent } from "../components/Content";

import styles from "./insulation-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../assets/services/insulation/hero.png";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Works = ({ data }) => (
  <div>
    {data.map(workDetail => (
      <div className={styles.wrapper}>
        <div className={styles.section} key={workDetail.title}>
          <div className={styles.image}>
            <PreviewCompatibleImage
              imageInfo={{
                image: workDetail.image,
                alt: workDetail.title
              }}
            />
          </div>
          <div>
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

export const InsulationPageTemplate = ({ title, subTitle }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
    </div>
  );
};

InsulationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

const InsulationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <InsulationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
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
      }
    }
  }
`;
