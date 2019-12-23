import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styles from "./Home.module.scss";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import { Button } from "../components/Button/Button";
import Slider from "../components/Slider/Slider";

import Insulation from "../assets/home/insulation.png";
import HealthyHomes from "../assets/home/healthyHomes.png";
import Wool from "../assets/home/woolproduct.png";
import Polyester from "../assets/home/polyester.png";
import GlassWool from "../assets/home/glasswool.png";
import { LearnMoreButton } from "../components/LearnMoreButton/LearnMoreButton";
import whyChooseUs01 from "../assets/home/whyChooseUs01.svg";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainbutton,
  eventtitle,
  eventdescription,
  whatwedo,
  mainpitch,
  description,
  intro
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
          <p className={styles.subtitle}>{subheading}</p>
          <Button title={mainbutton} bigButton />
        </div>
      </div>
      <div className={styles.heroImage}></div>
    </div>
    {/* 02. event banner */}
    <div className={styles.event}>
      <Slider>
        <div className={styles.eventInner}>
          <h1>{eventtitle}</h1>
          <p>{eventdescription}</p>
          <LearnMoreButton />
        </div>
        <div className={styles.eventInner}>
          <h1>{eventtitle}</h1>
          <p>{eventdescription}</p>
          <LearnMoreButton />
        </div>
        <div className={styles.eventInner}>
          <h1>{eventtitle}</h1>
          <p>{eventdescription}</p>
          <LearnMoreButton />
        </div>
      </Slider>
    </div>
    {/* 03. What We Do */}
    <div className={styles.whatWeDo}>
      <div className={styles.title}>
        <h2>What We Do</h2>
        <p>{whatwedo.description}</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={Insulation} alt="Insulation" />
          <div>
            <h4>{whatwedo.whatwedoFirst.firstTitle}</h4>
            <p>{whatwedo.whatwedoFirst.firstDescription}</p>
            <LearnMoreButton />
          </div>
        </div>
        <div className={styles.card}>
          <img src={HealthyHomes} alt="Healthy Homes" />
          <div>
            <h4>Healthy Homes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <LearnMoreButton />
          </div>
        </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  eventtitle: PropTypes.string,
  eventdescription: PropTypes.string,
  mainbutton: PropTypes.string,
  whatwedo: PropTypes.object,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
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
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        eventtitle={frontmatter.eventtitle}
        eventdescription={frontmatter.eventdescription}
        whatwedo={frontmatter.whatwedo}
        mainbutton={frontmatter.mainbutton}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainbutton
        eventtitle
        eventdescription
        whatwedo {
          description
          whatwedoFirst {
            firstTitle
            firstDescription
          }
          whatwedoSecond {
            secondTitle
            secondDescription
          }
        }
        mainpitch {
          title
          description
        }
        description
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
