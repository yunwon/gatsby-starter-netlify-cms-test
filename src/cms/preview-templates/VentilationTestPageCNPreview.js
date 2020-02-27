import React from "react";
import PropTypes from "prop-types";
import VentilationTestPageTemplate from "../../templates/components/VentilationTest/VentilationTest";

const VentilationTestPageCNPreview = ({ entry, widgetFor }) => {
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

VentilationTestPageCNPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default VentilationTestPageCNPreview;
