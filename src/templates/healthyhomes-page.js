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
        keyDatesList={frontmatter.keyDatesList}
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
            title
          }
        }
        keyDates {
          title
        }
        keyDatesList {
          title
          description
        }
      }
    }
  }
`;
