import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import HealthyHomesPageTemplate from "./components/Services/HealthyHomes.js";

const HealthyHomesPage = ({ data }) => {
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

HealthyHomesPage.propTypes = {
  data: PropTypes.object
};

export default HealthyHomesPage;

export const HealthyHomesPageQuery = graphql`
  query HealthyHomesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "healthyhomes-page" } }) {
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
