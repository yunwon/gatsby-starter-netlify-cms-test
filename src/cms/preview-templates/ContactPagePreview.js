import React from "react";
import PropTypes from "prop-types";
import ContactPageTemplate from "../../templates/components/Contact/Contact";

const ContactPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <ContactPageTemplate
        title={data.title}
        subTitle={data.subTitle}
        description={data.description}
        form={data.form}
        submitSuccessMessage={data.submitSuccessMessage}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ContactPagePreview;
