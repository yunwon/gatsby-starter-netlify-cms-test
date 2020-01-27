import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import HealthyHomesPageTemplate from "./components/Services/HealthyHomes";

const HealthyHomesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <HealthyHomesPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        standards={frontmatter.standards}
        fiveStandards={frontmatter.fiveStandards}
        keyDates={frontmatter.keyDates}
      />
    </Layout>
  );
};

HealthyHomesPage.propTypes = {
  data: PropTypes.object
};

export default HealthyHomesPage;

export const healthyhomesPageQuery = graphql`
  query HealthyHomesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "healthyhomes-page" } }) {
      frontmatter {
        title
        subTitle
        standards {
          title
          description
          extraDescription
        }
        fiveStandards {
          iconList {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
        keyDates {
          title
          keyDatesList {
            list {
              title
              description
            }
          }
        }
      }
    }
  }
`;
