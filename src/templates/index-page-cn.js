import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutCN from "../layout/LayoutCN";
import IndexPageTemplate from "./components/Index/Index";

const IndexCNPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <LayoutCN>
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
        language="Chinese"
      />
    </LayoutCN>
  );
};

IndexCNPage.propTypes = {
  data: PropTypes.object
};

export default IndexCNPage;

export const pageQuery = graphql`
  query IndexCNPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page-cn" } }) {
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
          other {
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
