import React from "react";
import PropTypes from "prop-types";
import MoistureTestTemplate from "../../templates/components/MoistureTest/MoistureTest";

const MoistureTestCNPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <MoistureTestTemplate title={data.title} subTitle={data.subTitle} />;
  } else {
    return <div>Loading...</div>;
  }
};

MoistureTestCNPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default MoistureTestCNPagePreview;
