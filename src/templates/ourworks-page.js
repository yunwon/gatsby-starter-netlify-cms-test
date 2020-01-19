import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import OurWorksPageTemplate from "./components/Services/OurWorks";

const OurWorksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <OurWorksPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        works={frontmatter.works}
      />
    </Layout>
  );
};

OurWorksPage.propTypes = {
  data: PropTypes.object
};

export default OurWorksPage;

export const ourWorksPageQuery = graphql`
  query OurWorksPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "ourworks-page" } }) {
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
