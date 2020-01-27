import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutCN from "../layout/LayoutCN";
import HealthyHomesPageTemplate from "./components/Services/HealthyHomes";

const HealthyHomesCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <LayoutCN>
      <HealthyHomesPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        standards={frontmatter.standards}
        keyDates={frontmatter.keyDates}
      />
    </LayoutCN>
  );
};

HealthyHomesCNPage.propTypes = {
  data: PropTypes.object
};

export default HealthyHomesCNPage;

export const healthyhomesCNPageQuery = graphql`
  query HealthyHomesCNPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "healthyhomes-page-cn" } }
    ) {
      frontmatter {
        title
        subTitle
        standards {
          title
          description
          icons {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            title
          }
          extraDescription
        }
        keyDates {
          title
          list {
            title
            description
          }
        }
      }
    }
  }
`;
