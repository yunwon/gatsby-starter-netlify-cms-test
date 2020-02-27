import React from "react";
import PropTypes from "prop-types";
import VentilationTestPageTemplate from "../../templates/components/VentilationTest/VentilationTest";

const VentilationTestPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <VentilationTestPageTemplate
        title={data.title}
        subTitle={data.subTitle}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

VentilationTestPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default VentilationTestPagePreview;
