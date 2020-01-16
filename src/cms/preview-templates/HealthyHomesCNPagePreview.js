import React from "react";
import PropTypes from "prop-types";
import HealthyHomesPageTemplate from "../../templates/healthyhomes-page";

const HealthyHomesCNPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <HealthyHomesPageTemplate
        title={data.title}
        subTitle={data.subTitle}
        standards={data.standards}
        keyDates={data.keyDates}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

HealthyHomesCNPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HealthyHomesCNPagePreview;
