import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import VentilationTestTemplate from "./components/VentilationTest/VentilationTest";

const VentilationTestPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <VentilationTestTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
      />
    </Layout>
  );
};

VentilationTestPage.propTypes = {
  data: PropTypes.object
};

export default VentilationTestPage;

export const ventilationTestPageQuery = graphql`
  query VentilationTestPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "ventilation-test-page" } }
    ) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
