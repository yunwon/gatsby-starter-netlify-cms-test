import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import ContactPageTemplate from "./components/Contact/Contact";

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        phoneNo={frontmatter.phoneNo}
        description={frontmatter.description}
        form={frontmatter.form}
        submitSuccessMessage={frontmatter.submitSuccessMessage}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        subTitle
        phoneNo
        description
        form {
          name {
            name
            placeholder
          }
          phone {
            name
            placeholder
          }
          email {
            name
            placeholder
          }
          type {
            name
            option {
              name
              value
            }
          }
          message {
            name
            placeholder
          }
          submit
        }
        submitSuccessMessage {
          title
          subTitle
          linkToHome
        }
      }
    }
  }
`;
