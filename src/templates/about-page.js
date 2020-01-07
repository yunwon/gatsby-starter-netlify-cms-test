import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import Content, { HTMLContent } from "../components/Content";

import styles from "./about-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../assets/services/insulation/hero.png";
import Logo from "../assets/logo.svg";
import SectionWithIcons from "../components/SectionWithIcons/SectionWithIcons";
import About01 from "../assets/about/01.png";
import About02 from "../assets/about/02.png";
import About03 from "../assets/about/03.png";

export const AboutPageTemplate = ({
  title,
  subTitle,
  description,
  ourPurpose,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

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
  ourPurpose: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        ourPurpose={post.frontmatter.ourPurpose}
        description={post.frontmatter.description}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        subTitle
        description
        ourPurpose {
          description
          ourPurpose01 {
            description
          }
          ourPurpose02 {
            description
          }
          ourPurpose03 {
            description
          }
        }
      }
    }
  }
`;
