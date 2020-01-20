import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutCN from "../layout/LayoutCN";
import ProductPageTemplate from "./components/Product/Product";

const ProductCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <LayoutCN>
      <ProductPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        productList={frontmatter.productList}
        language="Chinese"
      />
    </LayoutCN>
  );
};

ProductCNPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductCNPage;

export const productCNPageQuery = graphql`
  query ProductCNPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "product-page-cn" } }) {
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
