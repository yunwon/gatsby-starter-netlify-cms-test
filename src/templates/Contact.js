import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import styles from "./product-page.module.scss";
import styles from "./contact-page.module.scss";
import { Button } from "../components/Button/Button";
import { FaPhone } from "react-icons/fa";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "g", label: "General Question" },
  { value: "ss", label: "Service and Support" },
  { value: "s", label: "Spare Parts" },
  { value: "m", label: "Marketing" }
];

export const ContactPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  // testimonials,
  fullImage,
  pricing
}) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <div className={styles.inner}>
        <h2>Contact Us</h2>
        <p className={styles.callUs}>
          Call us NOW to find out more on&nbsp;
          <a href="tel:09-818-6606">
            <FaPhone className="flipImage" />
            09-818-6606.
          </a>
        </p>
        <br />
        <p>
          If you can’t call now, complete as much information below as you can
          and we’ll be in touch with you to talk through your requirements. Your
          enquiry will be answered within 2 business days by a representative of
          Snug Insulation Limited.
        </p>
      </div>
    </div>
    <div className={styles.form}>
      <form>
        <div className={styles.field}>
          <label>Name</label>
          <input placeholder="Your Name" />
        </div>
        <div className={styles.field}>
          <label>Phone</label>
          <input placeholder="Phone Number" />
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input placeholder="Your Email" />
        </div>
        <div className={styles.field}>
          <label>Type</label>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
            className="select"
          />
        </div>
        <div className={styles.field}>
          <label>Message</label>
          <textarea placeholder="Your Message" rows={7} />
        </div>
        <div className={styles.submitButton}>
          <Button title="Submit" />
        </div>
      </form>
    </div>
  </div>
);

ContactPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  //testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array
  })
};

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        //testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
