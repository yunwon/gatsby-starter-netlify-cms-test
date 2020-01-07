import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styles from "./index-page.module.scss";

import Layout from "../layout/Layout";
import Features from "../components/Features";
import { Button } from "../components/Button/Button";
import Slider from "../components/Slider/Slider";

import Insulation from "../assets/home/insulation.png";
import HealthyHomes from "../assets/home/healthyHomes.png";
import Wool from "../assets/home/woolproduct.png";
import Polyester from "../assets/home/polyester.png";
import GlassWool from "../assets/home/glasswool.png";
import { LearnMoreButton } from "../components/LearnMoreButton/LearnMoreButton";
import whyChooseUs01 from "../assets/home/whyChooseUs01.svg";
import SectionWithIcons from "../components/SectionWithIcons/SectionWithIcons";

import Quote from "../assets/home/quote.svg";

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
  eventTitle,
  eventdescription,
  whatWeDo,
  whyChooseUs,
  ourProducts,
  description
}) => (
  <div>
    {/* 01. hero */}
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            We are making
            <br /> <span>Healthier home</span> for you.
          </h1>
          <p className={styles.subtitle}>{subTitle}</p>
          <Button title={mainButton} bigButton />
        </div>
      </div>
      <div className={styles.heroImage}></div>
    </div>
    {/* 02. event banner */}
    <div className={styles.event}>
      <Slider>
        <div className={styles.eventInner}>
          <h1>{eventTitle}</h1>
          <p>{eventdescription}</p>
          <LearnMoreButton />
        </div>
        <div className={styles.eventInner}>
          <h1>{eventTitle}</h1>
          <p>{eventdescription}</p>
          <LearnMoreButton />
        </div>
        <div className={styles.eventInner}>
          <h1>{eventTitle}</h1>
          <p>{eventdescription}</p>
          <LearnMoreButton />
        </div>
      </Slider>
    </div>
    {/* 03. What We Do */}
    <div className={styles.whatWeDo}>
      <div className={styles.title}>
        <h2>What We Do</h2>
        <p>{whatWeDo.description}</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={Insulation} alt={whatWeDo.whatWeDo01.title} />
          <div>
            <h4>{whatWeDo.whatWeDo01.title}</h4>
            <p>{whatWeDo.whatWeDo01.description}</p>
            <LearnMoreButton />
          </div>
        </div>
        <div className={styles.card}>
          <img src={HealthyHomes} alt={whatWeDo.whatWeDo02.title} />
          <div>
            <h4>{whatWeDo.whatWeDo02.title}</h4>
            <p>{whatWeDo.whatWeDo02.description}</p>
            <LearnMoreButton />
          </div>
        </div>
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
        <h2>Our Products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/product">
          <LearnMoreButton />
        </Link>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={Wool} alt="Wool products" />
          <div>
            <h5>Wool products</h5>
            <p>
              Natural wool insulation in blanket or batting form. Ideal for
              walls of new buildings and ceilings in new and existing premises.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Polyester} alt="Polyester" />
          <div>
            <h5>Polyester</h5>
            <p>
              Snug Insulation is proud to introduce our high-performance range
              of 100% polyester thermal and acoustic insulation products,
              designed for the residential and commercial buildings.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={GlassWool} alt="Glass Wool" />
          <div>
            <h5>Glass Wool</h5>
            <p>
              EarthWool is rot-proof, odourless, non-hygroscopic, does not
              sustain vermin and will not encourage the growth of fungi, mould
              or bacteria.
            </p>
          </div>
        </div>
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
  eventTitle: PropTypes.string,
  eventdescription: PropTypes.string,
  mainButton: PropTypes.string,
  whatWeDo: PropTypes.object,
  whyChooseUs: PropTypes.object,
  ourProducts: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        eventTitle={frontmatter.eventTitle}
        eventdescription={frontmatter.eventdescription}
        whatWeDo={frontmatter.whatWeDo}
        mainButton={frontmatter.mainButton}
        whyChooseUs={frontmatter.whyChooseUs}
        ourProducts={frontmatter.ourProducts}
        intro={frontmatter.intro}
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
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subTitle
        mainButton
        eventTitle
        eventdescription
        whatWeDo {
          description
          whatWeDo01 {
            title
            description
          }
          whatWeDo02 {
            title
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
          description
          ourProducts01 {
            title
            description
          }
          ourProducts02 {
            title
            description
          }
          ourProducts03 {
            title
            description
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
