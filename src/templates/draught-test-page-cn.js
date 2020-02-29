import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import DraughtTestTemplate from "./components/DraughtTest/DraughtTest";

const DraughtTestCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <DraughtTestTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
      />
    </Layout>
  );
};

DraughtTestCNPage.propTypes = {
  data: PropTypes.object
};

export default DraughtTestCNPage;

export const draughtTestCNPageQuery = graphql`
  query DraughtTestCNPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "draught-test-page-cn" } }
    ) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
