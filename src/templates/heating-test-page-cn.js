import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import HeatingTestTemplate from "./components/HeatingTest/HeatingTest";

const HeatingTestCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <HeatingTestTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
      />
    </Layout>
  );
};

HeatingTestCNPage.propTypes = {
  data: PropTypes.object
};

export default HeatingTestCNPage;

export const heatingTestCNPageQuery = graphql`
  query HeatingTestCNPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "heating-test-page-cn" } }
    ) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
