import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutCN from "../layout/LayoutCN";
import OurWorksPageTemplate from "./components/Services/OurWorks.js";

const OurWorksCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <LayoutCN>
      <OurWorksPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        works={frontmatter.works}
      />
    </LayoutCN>
  );
};

OurWorksCNPage.propTypes = {
  data: PropTypes.object
};

export default OurWorksCNPage;

export const ourWorksCNPageQuery = graphql`
  query OurWorksCNPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "ourworks-page-cn" } }) {
      frontmatter {
        title
        subTitle
        works {
          workDetail {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            year
            company
            description
          }
        }
      }
    }
  }
`;
