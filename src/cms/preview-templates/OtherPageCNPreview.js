import React from "react";
import PropTypes from "prop-types";
import OtherPageTemplate from "../../templates/components/Other/Other";

const OtherPageCNPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <OtherPageTemplate title={data.title} subTitle={data.subTitle} />;
  } else {
    return <div>Loading...</div>;
  }
};

OtherPageCNPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default OtherPageCNPreview;
