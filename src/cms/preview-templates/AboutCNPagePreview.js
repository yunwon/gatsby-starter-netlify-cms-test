import React from "react";
import PropTypes from "prop-types";
import AboutPageTemplate from "../../templates/components/About/About";

const AboutCNPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    subTitle={entry.getIn(["data", "subTitle"])}
    description={entry.getIn(["data", "description"])}
    ourPurpose={{
      description: entry.getIn(["data", "description"]),
      ourPurpose01: {
        description: entry.getIn(["data", "description"])
      },
      ourPurpose02: {
        description: entry.getIn(["data", "description"])
      },
      ourPurpose03: {
        description: entry.getIn(["data", "description"])
      }
    }}
  />
);

AboutCNPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutCNPagePreview;
