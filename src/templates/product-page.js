import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import ProductPageTemplate from "./components/Product/Product";

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        productList={frontmatter.productList}
        language="English"
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "product-page" } }) {
      frontmatter {
        title
        subTitle
        productList {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id
          intro
          descriptionList {
            title
            description {
              subTitle
              subDescription
            }
          }
        }
      }
    }
  }
`;
