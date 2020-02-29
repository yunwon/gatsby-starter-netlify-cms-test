import React from "react";
import PropTypes from "prop-types";
import MoistureTestTemplate from "../../templates/components/MoistureTest/MoistureTest";

const MoistureTestPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <MoistureTestTemplate title={data.title} subTitle={data.subTitle} />;
  } else {
    return <div>Loading...</div>;
  }
};

MoistureTestPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default MoistureTestPagePreview;
