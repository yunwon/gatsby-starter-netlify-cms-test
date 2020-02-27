import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import VentilationTestTemplate from "./components/VentilationTest/VentilationTest";

const VentilationTestCNPage = ({ data }) => {
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

VentilationTestCNPage.propTypes = {
  data: PropTypes.object
};

export default VentilationTestCNPage;

export const ventilationTestCNPageQuery = graphql`
  query VentilationTestCNPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "ventilation-test-page-cn" } }
    ) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
