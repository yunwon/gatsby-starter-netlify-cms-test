import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import OtherPageTemplate from "./components/Other/Other";

const OtherPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <OtherPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
      />
    </Layout>
  );
};

OtherPage.propTypes = {
  data: PropTypes.object
};

export default OtherPage;

export const OtherPageQuery = graphql`
  query OtherPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "other-page" } }) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
