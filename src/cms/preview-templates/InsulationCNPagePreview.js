import React from "react";
import PropTypes from "prop-types";
import InsulationPageTemplate from "../../templates/components/Services/Insulation";

const InsulationCNPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <InsulationPageTemplate
        title={data.title}
        subTitle={data.subTitle}
        section={data.section}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

InsulationCNPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default InsulationCNPagePreview;
