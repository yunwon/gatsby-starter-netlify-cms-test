import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutCN from "../layout/LayoutCN";
import InsulationPageTemplate from "./components/Services/Insulation.js";

const InsulationCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <LayoutCN>
      <InsulationPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        section={frontmatter.section}
      />
    </LayoutCN>
  );
};

InsulationCNPage.propTypes = {
  data: PropTypes.object
};

export default InsulationCNPage;

export const InsulationCNPageQuery = graphql`
  query InsulationCNPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "insulation-page-cn" } }) {
      frontmatter {
        title
        subTitle
        section {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`;
