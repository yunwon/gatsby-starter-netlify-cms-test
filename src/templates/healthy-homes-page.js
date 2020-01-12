// import React, { Component } from "react";
// import styles from "./HealthyHomes.module.scss";
// import { Layout } from "src/layout/Layout";
// import HeroSection from "src/components/HeroSection/HeroSection";
// import BgImage from "src/assets/services/healthyhomes/hero.png";

// export default class HealthyHomes extends Component {
//   componentDidMount() {
//     window.scrollTo(0, 0);
//   }
//   render() {
//     return (
//       <Layout>
//         <HeroSection
//           title="Healthy Homes"
//           subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           Sit amet porttitor eget dolor morbi non arcu risus quis. "
//           bgImage={BgImage}
//         />
//       </Layout>
//     );
//   }
// }

import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import styles from "./healthy-homes-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../assets/services/healthy-homes/hero.png";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Section = ({ data }) => (
  <div>
    {data.map(sectionDetail => (
      <div className={styles.wrapper}>
        <div className={styles.section} key={sectionDetail.title}>
          <div className={styles.image}>
            <PreviewCompatibleImage
              imageInfo={{
                image: sectionDetail.image,
                alt: sectionDetail.title
              }}
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

export const HealthyHomesPageTemplate = ({ title, subTitle, section }) => {
  return (
    <div>
      <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
      <Section data={section.sectionDetail} />
    </div>
  );
};

HealthyHomesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  section: PropTypes.shape({
    sectionDetail: PropTypes.array
  })
};

const HealthyHomesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <HealthyHomesPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        section={frontmatter.section}
      />
    </Layout>
  );
};

HealthyHomesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HealthyHomesPage;

export const HealthyHomesPageQuery = graphql`
  query HealthyHomesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "healthy-homes-page" } }) {
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
