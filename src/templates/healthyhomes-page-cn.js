import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutCN from "../layout/LayoutCN";
import HealthyHomesPageTemplate from "./components/Services/HealthyHomes";

const HealthyHomesCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <LayoutCN>
      <HealthyHomesPageTemplate
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        standards={frontmatter.standards}
        standardIcons={frontmatter.standardIcons}
        keyDatesTitle={frontmatter.keyDatesTitle}
        keyDatesList={frontmatter.keyDatesList}
        whatWeCanDo={frontmatter.whatWeCanDo}
        contact={frontmatter.contact}
        language="Chinese"
      />
    </LayoutCN>
  );
};

HealthyHomesCNPage.propTypes = {
  data: PropTypes.object
};

export default HealthyHomesCNPage;

export const healthyhomesCNPageQuery = graphql`
  query HealthyHomesCNPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "healthyhomes-page-cn" } }
    ) {
      frontmatter {
        title
        subTitle
        standards {
          title
          description
          extraDescription
        }
        standardIcons {
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          linkUri
        }
        keyDatesTitle
        keyDatesList {
          title
          description
          dueYear
        }
        whatWeCanDo {
          title
          subtitle
          description
        }
        contact {
          title
          button
        }
      }
    }
  }
`;
