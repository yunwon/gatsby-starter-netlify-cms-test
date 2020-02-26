import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import AboutPageTemplate from "./components/About/About";

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        description={frontmatter.description}
        ourPurpose={frontmatter.ourPurpose}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object
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
          title
          subtitle
          iconList {
            icon {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
          }
        }
      }
    }
  }
`;
