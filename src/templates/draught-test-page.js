import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import DraughtTestTemplate from "./components/DraughtTest/DraughtTest";

const DraughtTestPage = ({ data }) => {
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

DraughtTestPage.propTypes = {
  data: PropTypes.object
};

export default DraughtTestPage;

export const draughtTestPageQuery = graphql`
  query DraughtTestPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "draught-test-page" } }) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
