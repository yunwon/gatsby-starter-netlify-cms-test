import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import HealthyHomesPageTemplate from "./components/Services/healthyhomes";

const HealthyHomesCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <HealthyHomesPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        standards={frontmatter.standards}
        keyDates={frontmatter.keyDates}
      />
    </Layout>
  );
};

HealthyHomesCNPage.propTypes = {
  data: PropTypes.object
};

export default HealthyHomesCNPage;

export const HealthyHomesCNPageQuery = graphql`
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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
