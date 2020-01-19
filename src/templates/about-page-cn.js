import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutCN from "../layout/LayoutCN";
import AboutPageTemplate from "./components/About/About";

const AboutCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <LayoutCN>
      <AboutPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        description={frontmatter.description}
        ourPurpose={frontmatter.ourPurpose}
      />
    </LayoutCN>
  );
};

AboutCNPage.propTypes = {
  data: PropTypes.object
};

export default AboutCNPage;

export const aboutCNPageQuery = graphql`
  query AboutCNPageTemplate {
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
