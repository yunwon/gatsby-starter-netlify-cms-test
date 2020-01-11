import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styles from "./index-page.module.scss";

import Layout from "../layout/Layout";
import { Button } from "../components/Button/Button";
import Slider from "../components/Slider/Slider";

import Wool from "../assets/home/woolproduct.png";
import Polyester from "../assets/home/polyester.png";
import GlassWool from "../assets/home/glasswool.png";
import { LearnMoreButton } from "../components/LearnMoreButton/LearnMoreButton";
import whyChooseUs01 from "../assets/home/whyChooseUs01.svg";
import SectionWithIcons from "../components/SectionWithIcons/SectionWithIcons";

import Quote from "../assets/home/quote.svg";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const RenderTestimonial = ({ text, name, company }) => {
  return (
    <div className={styles.testimonials}>
      <p className={styles.text}>{text}</p>
      <div className={styles.profile}>
        <p className={styles.name}>{name}</p>
        <p className={styles.company}>{company}</p>
      </div>
    </div>
  );
};

export const IndexPageTemplate = ({
  image,
  title,
  subTitle,
  mainButton,
  events,
  whatWeDo,
  whyChooseUs,
  ourProducts
}) => (
  <div>
    {/* 01. hero */}
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subTitle}</p>
          <Button title={mainButton} bigButton />
        </div>
      </div>
      <div className={styles.heroImage}></div>
    </div>
    {/* 02. event banner */}
    <div className={styles.event}>
      <Slider>
        {events.event.map(event => (
          <div className={styles.eventInner}>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <LearnMoreButton />
          </div>
        ))}
      </Slider>
    </div>
    {/* 03. What We Do */}
    <div className={styles.whatWeDo}>
      <div className={styles.title}>
        <h2>{whatWeDo.title}</h2>
        <p>{whatWeDo.description}</p>
      </div>
      <div className={styles.cards}>
        {whatWeDo.whatWeDoDetail.map(item => (
          <div className={styles.card}>
            <div className={styles.image}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: item.image,
                  alt: item.title
                }}
              />
            </div>
            {/* <img src={Insulation} alt={whatWeDo.whatWeDo01.title} /> */}
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <LearnMoreButton />
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* 04. Why Choose Us */}
    <SectionWithIcons
      title="Why Choose Us"
      descriptionArray={[
        whyChooseUs.whyChooseUs01.description,
        whyChooseUs.whyChooseUs02.description,
        whyChooseUs.whyChooseUs03.description
      ]}
      icons={[whyChooseUs01, whyChooseUs01, whyChooseUs01]}
    />
    {/* 05. Our Products */}
    <div className={styles.ourProducts}>
      <div className={styles.title}>
        <h2>{ourProducts.title}</h2>
        <p>{ourProducts.description}</p>
        <Link to="/product">
          <LearnMoreButton />
        </Link>
      </div>
      <div className={styles.cards}>
        {ourProducts.productList.map(item => (
          <div className={styles.card}>
            <div className={styles.image}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: item.image,
                  alt: item.title
                }}
              />
            </div>
            <div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* 06. Testimonials */}
    <div className={styles.testimonials_container}>
      <img src={Quote} alt="quote" />
      <h2 className={styles.title}>Testimonials</h2>
      <Slider>
        <RenderTestimonial
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget
                    gravida cum sociis natoque penatibus et."
          name="John Doe"
          company="ABC Ltd"
        />
        <RenderTestimonial
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget
                    gravida cum sociis natoque penatibus et."
          name="Jane Doe"
          company="ABC Ltd"
        />
        <RenderTestimonial
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget
                    gravida cum sociis natoque penatibus et."
          name="John Doe"
          company="ABC Ltd"
        />
      </Slider>
    </div>
    {/* 07. Contact Us */}
    <div className={styles.contactUs}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Talk To Us Now</h2>
          <p className={styles.subtitle}>
            Call us at <a href="tel:09-818-6606">09-818-6606</a>
          </p>
          <button className={styles.button}>Email Us</button>
        </div>
      </div>
      <div className={styles.contactImage}></div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  events: PropTypes.object,
  mainButton: PropTypes.string,
  whatWeDo: PropTypes.object,
  whyChooseUs: PropTypes.object,
  ourProducts: PropTypes.object
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        events={frontmatter.events}
        mainButton={frontmatter.mainButton}
        whatWeDo={frontmatter.whatWeDo}
        whyChooseUs={frontmatter.whyChooseUs}
        ourProducts={frontmatter.ourProducts}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
  //data: PropTypes.object.isRequired
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subTitle
        mainButton
        events {
          event {
            title
            description
          }
        }
        whatWeDo {
          title
          description
          whatWeDoDetail {
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
        whyChooseUs {
          whyChooseUs01 {
            description
          }
          whyChooseUs02 {
            description
          }
          whyChooseUs03 {
            description
          }
        }
        ourProducts {
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
            description
          }
        }
      }
    }
  }
`;
