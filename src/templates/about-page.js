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
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <HeroSection title={title} subtitle="sdfasdasdf" bgImage={BgImage} />
      <div className={styles.aboutUs}>
        <img src={Logo} alt="Logo" />
        <div>
          <p>
            Snug Insulation Limited is a New Zealand Owned company focus on
            saving energy in New Zealand homes since 2010. Our mission is on
            providing Kiwi's with warm, dry and healthy places to both live &
            work.
            <br />
            <br />
            Our company is dedicated in providing reliable quality and energy
            efficiency products and solutions. The aim, to create a more
            environmentally sustainable building using the best of new
            technologies.
          </p>
        </div>
      </div>
      <SectionWithIcons
        title="Our Purpose"
        subtitle="We are commited to looking after the earth's resources responsibly."
        descriptionArray={[
          "We set a new standard for living that will be better for our people and for our planet",
          "We provide New Zealand householders with products and services to reduce their energy costs",
          "We increase New Zealand householders’ comfort levels and make their homes more environmentally friendly"
        ]}
        icons={[About01, About02, About03]}
      />
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
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
      }
    }
  }
`;
