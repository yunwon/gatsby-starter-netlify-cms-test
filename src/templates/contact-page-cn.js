import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutCN from "../layout/LayoutCN";
import ContactPageTemplate from "./components/Contact/Contact";

const ContactCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <LayoutCN>
      <ContactPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        phoneNo={frontmatter.phoneNo}
        description={frontmatter.description}
        form={frontmatter.form}
        submitSuccessMessage={frontmatter.submitSuccessMessage}
      />
    </LayoutCN>
  );
};

ContactCNPage.propTypes = {
  data: PropTypes.object
};

export default ContactCNPage;

export const ContactCNPageQuery = graphql`
  query ContactCNPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page-cn" } }) {
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
              label
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
