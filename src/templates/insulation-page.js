import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import InsulationPageTemplate from "./components/Services/Insulation.js";

const InsulationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <InsulationPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        section={frontmatter.section}
      />
    </Layout>
  );
};

InsulationPage.propTypes = {
  data: PropTypes.object
};

export default InsulationPage;

export const InsulationPageQuery = graphql`
  query InsulationPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "insulation-page" } }) {
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
          linkUri
        }
      }
    }
  }
`;
