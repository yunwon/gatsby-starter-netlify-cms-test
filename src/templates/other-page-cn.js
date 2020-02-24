import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutCN from "../layout/LayoutCN";
import OtherPageTemplate from "./components/Other/Other";

const OtherCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <LayoutCN>
      <OtherPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
      />
    </LayoutCN>
  );
};

OtherCNPage.propTypes = {
  data: PropTypes.object
};

export default OtherCNPage;

export const OtherCNPageQuery = graphql`
  query OtherCNPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "ourworks-page-cn" } }) {
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
