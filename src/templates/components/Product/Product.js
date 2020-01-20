import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";

import styles from "./Product.module.scss";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BgImage from "../../../assets/product/hero.png";
import { LearnMoreButton } from "../../../components/LearnMoreButton/LearnMoreButton";

import Collapsible from "react-collapsible";
import { FaChevronDown } from "react-icons/fa";

class ProductPageTemplate extends React.Component {
  render() {
    const { title, subTitle, productList, language } = this.props;

    return (
      <div>
        <HeroSection title={title} subtitle={subTitle} bgImage={BgImage} />
        {/* 01. Overview */}
        <div className={styles.overview}>
          <div className={styles.cards}>
            {productList.map(item => (
              <div className={styles.card} key={item.title}>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: item.image,
                    alt: item.title
                  }}
                  className={styles.cardImage}
                />
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.intro}</p>
                  <a href={`#${item.id}`}>
                    <LearnMoreButton language={language} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 02. More Info */}
        {productList.map(product => (
          <div className={styles.wrapper} key={product.id}>
            <div className={styles.section} id={product.id}>
              <h4>{product.title}</h4>
              <PreviewCompatibleImage
                imageInfo={{
                  image: product.image,
                  alt: product.title
                }}
                className={styles.image}
              />
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

export default ProductPageTemplate;
