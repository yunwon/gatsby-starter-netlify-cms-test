import React from "react";
import PropTypes from "prop-types";
import { HealthyHomesPageTemplate } from "../../templates/healthyhomes-page";

const HealthyHomesPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <HealthyHomesPageTemplate
        title={data.title}
        subTitle={data.subTitle}
        standards={data.standards}
        keyDates={data.keyDates}
        // standards={{
        //   title: data.standards.title,
        //   description: data.standards.description,
        //   icons: {
        //     title: data.standards.icons.title,
        //     image: data.standards.icons.image
        //   }
        // }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

HealthyHomesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HealthyHomesPagePreview;
