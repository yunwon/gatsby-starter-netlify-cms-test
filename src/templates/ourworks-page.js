import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import Content, { HTMLContent } from "../components/Content";

import styles from "./ourworks-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../assets/services/insulation/hero.png";
import Img from "gatsby-image";

const Works = ({ data }) => (
  <div>
    {data.map(workDetail => (
      <div className={styles.wrapper}>
        <div className={styles.section} key={workDetail.title}>
          <div className={styles.image}>
            <Img
              src={workDetail.image}
              fluid={workDetail.image.childImageSharp.fluid}
              alt={workDetail.title}
              style={{ borderRadius: 4 }}
            />
          </div>
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

export const OurWorksPageTemplate = ({ title, subTitle, works }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      <Works data={works.workDetail} />
    </div>
  );
};

OurWorksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  works: PropTypes.shape({
    workDetail: PropTypes.array
  })
};

const OurWorksPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <OurWorksPageTemplate
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        works={post.frontmatter.works}
      />
    </Layout>
  );
};

OurWorksPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default OurWorksPage;

export const OurWorksPageQuery = graphql`
  query OurWorksPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "ourworks-page" } }) {
      frontmatter {
        title
        subTitle
        works {
          workDetail {
            image {
              childImageSharp {
                fluid {
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
