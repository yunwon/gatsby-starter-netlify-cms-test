import React from "react";
import PropTypes from "prop-types";
import ContactPageTemplate from "../../templates/components/Contact/Contact";

const ContactCNPagePreview = ({ entry, widgetFor }) => (
  <ContactPageTemplate
    title={entry.getIn(["data", "title"])}
    subTitle={entry.getIn(["data", "subTitle"])}
    description={entry.getIn(["data", "description"])}
    form={entry.getIn(["data", "form"])}
    submitSuccessMessage={entry.getIn(["data", "submitSuccessMessage"])}
  />
);

ContactCNPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ContactCNPagePreview;
