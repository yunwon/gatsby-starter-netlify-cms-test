import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import IndexPageTemplate from "./components/Index/Index";

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
        partners={frontmatter.partners}
        testimonials={frontmatter.testimonials}
        contact={frontmatter.contact}
        language="English"
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object
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
            modal {
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
        }
        whatWeDo {
          title
          description
          insulation {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
            linkUri
          }
          healthyHomes {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
            linkUri
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
        partners {
          title
          list {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
        testimonials {
          title
          testimonialList {
            description
            name
            company
          }
        }
        contact {
          title
          phoneNo
          button
        }
      }
    }
  }
`;
