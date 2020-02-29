import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import MoistureTestTemplate from "./components/MoistureTest/MoistureTest";

const MoistureTestPage = ({ data }) => {
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

MoistureTestPage.propTypes = {
  data: PropTypes.object
};

export default MoistureTestPage;

export const moistureTestPageQuery = graphql`
  query MoistureTestPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "moisture-test-page" } }) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
