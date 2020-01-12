import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import styles from "./product-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../assets/product/hero.png";
import WoolThumb from "../assets/home/woolproduct.png";
import Wool from "../assets/product/wool.jpg";
import Polyester from "../assets/home/polyester.png";
import GlassWoolThumb from "../assets/home/glasswool.png";
import GlassWool from "../assets/product/glasswool.jpg";
import { LearnMoreButton } from "../components/LearnMoreButton/LearnMoreButton";

import Collapsible from "react-collapsible";
import { FaChevronDown } from "react-icons/fa";

class ProductPageTemplate extends React.Component {
  render() {
    const { title, description, productList } = this.props;

    return (
      <div>
        <HeroSection title={title} subtitle={description} bgImage={BgImage} />
        {/* 01. Overview */}
        <div className={styles.overview}>
          <div className={styles.cards}>
            {productList.map(item => (
              <div className={styles.card}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.intro}</p>
                  <a href={`#${item.id}`}>
                    <LearnMoreButton />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 02. More Info */}
        {productList.map(product => (
          <div className={styles.section} id={product.id}>
            <h4>{product.title}</h4>
            <img src={product.image} alt={product.title} />
            <div className={styles.description}>
              {product.descriptionList.map(item => (
                <Collapsible
                  transitionTime={400}
                  trigger={
                    <div className="trigger">
                      <h5>{item.title}</h5>
                      <FaChevronDown />
                    </div>
                  }
                  easing={"cubic-bezier(0.175, 0.885, 0.32, 2.275)"}
                >
                  {item.description.map(item => (
                    <>
                      {item.subTitle ? (
                        <Collapsible
                          transitionTime={400}
                          trigger={
                            <div className="trigger">
                              <h6>{item.subTitle}</h6>
                              <FaChevronDown />
                            </div>
                          }
                          easing={"cubic-bezier(0.175, 0.885, 0.32, 2.275)"}
                        >
                          <p>{item.subDescription}</p>
                        </Collapsible>
                      ) : (
                        <p>{item.subDescription}</p>
                      )}
                    </>
                  ))}
                </Collapsible>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  productList: PropTypes.array
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        productList={frontmatter.productList}
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
        description
        productList {
          title
          image {
            childImageSharp {
              fluid {
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
