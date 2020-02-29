import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import MoistureTestTemplate from "./components/MoistureTest/MoistureTest";

const MoistureTestCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <MoistureTestTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
      />
    </Layout>
  );
};

MoistureTestCNPage.propTypes = {
  data: PropTypes.object
};

export default MoistureTestCNPage;

export const moistureTestCNPageQuery = graphql`
  query MoistureTestCNPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "moisture-test-page-cn" } }
    ) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
