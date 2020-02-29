import React from "react";
import PropTypes from "prop-types";
import DraughtTestPageTemplate from "../../templates/components/DraughtTest/DraughtTest";

const DraughtTestCNPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <DraughtTestPageTemplate
        title={data.title}
        subTitle={data.subTitle}
        section={data.section}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

DraughtTestCNPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default DraughtTestCNPagePreview;
