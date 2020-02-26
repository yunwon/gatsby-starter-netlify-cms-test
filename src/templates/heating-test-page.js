import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import HeatingTestTemplate from "../templates/components/HeatingTest/HeatingTest";

const HeatingTestPage = ({ data }) => {
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

HeatingTestPage.propTypes = {
  data: PropTypes.object
};

export default HeatingTestPage;

export const heatingTestPageQuery = graphql`
  query HeatingTestPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "heating-test-page" } }) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
