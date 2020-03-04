import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";

import styles from "./Product.module.scss";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BgImage from "../../../assets/product/hero.png";
import { LearnMoreButton } from "../../../components/LearnMoreButton/LearnMoreButton";

import Collapsible from "react-collapsible";
import { FaChevronDown } from "react-icons/fa";
import { Divider } from "../../../components/Divider/Divider";

class ProductPageTemplate extends React.Component {
  render() {
    const { title, subTitle, productList, language, glassWool } = this.props;

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
                  className={styles.image}
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
        <div className={styles.sectionWithColor}>
          <div className={styles.inner}>
            <div className={styles.titleDiv}>
              <h2 className={styles.title}>Glass Wool</h2>
              <Divider className={styles.divider} />
              <p className={styles.subtitle}>
                Our Glasswool is super soft, making it more comfortable to
                handle. Pluse, you'll know you're keeping your home warmer in
                the winter, cooler in the summer, and quieter all year round.{" "}
              </p>
            </div>
            <hr />
            {/* 02. Glasswool */}
            <div className={styles.glassWool}>
              <div className={styles.logo}>
                Logo
                {/* <PreviewCompatibleImage
                  imageInfo={{
                    image: glassWool.logo,
                    alt: glassWool.title
                  }}
                  className={styles.image}
                /> */}
              </div>
              <div className={styles.description}>
                <div className={styles.image}>image</div>
                <div className={styles.paragraph}>description</div>
                <div className={styles.benefits}>
                  <div>Benefits</div>
                  <div>
                    <ul>
                      <li>Exceptional thermal and acoustic performance</li>
                      <li>Reduces energy bills</li>
                      <li>Softer - virtually itch free</li>
                      <li>No added formaldehyde</li>
                      <li>Odourless</li>
                      <li>Naturally brown - no artificial colours added</li>
                      <li>Fire resistant</li>
                      <li>Manufactured using recycled glass bottles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
