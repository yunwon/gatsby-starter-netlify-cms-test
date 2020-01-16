import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";

import styles from "./ourworks-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../assets/services/insulation/hero.png";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

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

export const OurWorksCNPageTemplate = ({ title, subTitle, works }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      <Works data={works.workDetail} />
    </div>
  );
};

OurWorksCNPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  works: PropTypes.shape({
    workDetail: PropTypes.array
  })
};

const OurWorksCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <OurWorksCNPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        works={frontmatter.works}
      />
    </Layout>
  );
};

OurWorksCNPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default OurWorksCNPage;

export const ourWorksCNPageQuery = graphql`
  query OurWorksCNPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "ourworks-page-cn" } }) {
      frontmatter {
        title
        subTitle
        works {
          workDetail {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            year
            company
            description
          }
        }
      }
    }
  }
`;
